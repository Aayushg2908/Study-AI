import { getHistory } from "@/actions";
import Link from "next/link";

const HistoryPage = async () => {
  const posts = await getHistory();

  return (
    <div className="flex flex-col justify-center items-center mt-8 gap-y-8">
      <div className="font-bold text-3xl">History</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link
            href={`/post/${post.id}`}
            key={post.id}
            className="w-[200px] h-[100px] flex items-center rounded-md shadow-sm shadow-white p-2"
          >
            {post.prompt}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;
