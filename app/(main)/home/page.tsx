"use client";

import { Button, Textarea } from "@nextui-org/react";
import { useState } from "react";
import {
  PencilIcon,
  ClipboardList,
  SparklesIcon,
  RefreshCcwDot,
} from "lucide-react";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";
import { generateResponse } from "@/actions";

const HomePage = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const buttonVariant = [
    {
      value: "Generate Test",
      Icon: ClipboardList,
    },
    {
      value: "Generate Notes",
      Icon: PencilIcon,
    },
    {
      value: "Generate Answer",
      Icon: SparklesIcon,
    },
    {
      value: "Analyze Syllabus",
      Icon: RefreshCcwDot,
    },
  ];

  const handleClick = async (value: string) => {
    if (prompt.length === 0) {
      toast.error("Please enter a prompt");
    } else if (prompt.length > 300) {
      toast.error("Prompt must be less than 300 characters");
    } else {
      setIsLoading(true);
      if (value === "Generate Test") {
        try {
          const text = await generateResponse(0, prompt);
          setResponse(text);
        } catch (error: any) {
          toast.error(error);
        }
      } else if (value === "Generate Notes") {
        try {
          const text = await generateResponse(1, prompt);
          setResponse(text);
        } catch (error: any) {
          toast.error(error);
        }
      } else if (value === "Generate Answer") {
        try {
          const text = await generateResponse(2, prompt);
          setResponse(text);
        } catch (error: any) {
          toast.error(error);
        }
      } else if (value === "Analyze Syllabus") {
        try {
          const text = await generateResponse(3, prompt);
          setResponse(text);
        } catch (error: any) {
          toast.error(error);
        }
      }
      setPrompt("");
      setIsLoading(false);
    }
  };

  if (isLoading) {
    toast.loading("Generating response...");
  }

  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-4">
      <h1 className="font-bold text-2xl sm:text-3xl mt-6">Generate</h1>
      <Textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        label="Prompt"
        placeholder="Add your syllabus here..."
        className="w-[250px] sm:w-[300px] md:w-[350px]"
        variant="faded"
      />
      <div className="text-foreground-600 mb-4">
        {prompt.length}/300 characters
      </div>
      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {buttonVariant.map(({ value, Icon }) => (
          <Button
            key={value}
            onClick={() => handleClick(value)}
            className="bg-gradient-to-r from-[#7EE7FC] to-[#45D483] text-black font-bold"
            startContent={<Icon />}
          >
            {value}
          </Button>
        ))}
      </div>
      {response ? (
        <div className="my-6 flex flex-col gap-6 content border border-foreground-500 sm:w-[500px ] md:w-[700px] p-10 rounded-md">
          <ReactMarkdown>{response}</ReactMarkdown>
        </div>
      ) : (
        <div className="mt-8 h-[100px] w-fit py-4 px-10 rounded-md border border-foreground-400 flex items-center justify-center">
          Give prompt to generate response
        </div>
      )}
    </div>
  );
};

export default HomePage;
