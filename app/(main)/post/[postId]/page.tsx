import { getPostById } from "@/actions";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

const PostIdPage = async ({ params }: { params: { postId: string } }) => {
  const { postId } = params;
  const post = await getPostById(postId);
  if (!post) {
    return notFound();
  }

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col gap-6 content border border-foreground-500 sm:w-[500px ] md:w-[700px] p-10 rounded-md">
        <ReactMarkdown>{post.response}</ReactMarkdown>
      </div>
    </div>
  );
};

export default PostIdPage;
