import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="h-20 flex justify-between items-center p-2">
      <Link
        href="/home"
        className="font-bold text-2xl ml-2 bg-clip-text text-transparent bg-gradient-to-r from-[#7EE7FC] to-[#45D483]"
      >
        StudyAI
      </Link>
      <div className="mr-6 flex items-center gap-x-8">
        <Link href="/history">History</Link>
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};
