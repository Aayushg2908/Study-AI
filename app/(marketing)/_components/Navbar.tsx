import { SignInButton } from "./SignInButton";

export const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center h-20 px-1 sm:px-6">
      <h1 className="font-bold text-2xl ml-2 bg-clip-text text-transparent bg-gradient-to-r from-[#7EE7FC] to-[#45D483]">
        StudyAI
      </h1>
      <SignInButton />
    </nav>
  );
};
