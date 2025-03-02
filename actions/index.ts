"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { redirect } from "next/navigation";

export const generateResponse = async (index: number, prompt: string) => {
  const { userId } = auth();
  if (!userId) {
    return redirect("/");
  }

  const user = await db.user.findUnique({
    where: {
      clerkId: userId,
    },
  });
  if (!user) {
    throw new Error("User not found");
  }

  const prompts = [
    `For the below given syllabus give me a test.
        -it should contain 10 questions with a very short answer key after each question
        -all the questions should be of descriptive type 
        -test should contain questions of 4,5,6,7,8 marks
        -only use commonmark markdown for response, use #, ##, ### for headings
        -do not provide any instructions
        
        `,

    `For the below given syllabus give me notes on every topic.
        -every topic should be covered in at least 150  words, could be more depending on the topic
        -only use commonmark markdown for response, use #, ##, ### for headings
        - inlcude few resources links with each topic 
        `,

    `Answer the below question as an ideal answer to a question in a test that will get full marks
        -only use commonmark markdown for response, use #, ##, ### for headings
        `,

    `Analyse the syllabus given below and provide the list of most important topics along with subtopic that I need to study inorder to ace the exams`,
  ];

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const gen_prompt = `${prompts[index]}
  ${prompt}
  `;

  const result = await model.generateContent(gen_prompt);
  const response = await result.response;
  const text = response.text();

  await db.post.create({
    data: {
      prompt: prompt,
      response: text,
      userId: user.id,
    },
  });

  return text;
};

export const getHistory = async () => {
  const { userId } = auth();
  if (!userId) {
    return redirect("/");
  }

  const user = await db.user.findUnique({
    where: {
      clerkId: userId,
    },
  });
  if (!user) {
    throw new Error("User not found");
  }

  const posts = await db.post.findMany({
    where: {
      userId: user.id,
    },
  });

  return posts;
};

export const getPostById = async (id: string) => {
  const { userId } = auth();
  if (!userId) {
    return redirect("/");
  }

  const user = await db.user.findUnique({
    where: {
      clerkId: userId,
    },
  });
  if (!user) {
    throw new Error("User not found");
  }

  const post = await db.post.findUnique({
    where: {
      id: id,
    },
  });

  return post;
};
