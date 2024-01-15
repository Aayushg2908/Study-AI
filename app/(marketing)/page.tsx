import { SignInButton } from "./_components/SignInButton";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center mt-8">
      <div className="flex flex-col gap-y-8 items-center">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-center text-5xl sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#7EE7FC] to-[#45D483]">
            All-in-one
          </h1>
          <h1 className="font-bold text-center text-4xl sm:text-5xl text-foreground-600">
            tool for exam prep
          </h1>
        </div>
        <p className="text-center text-foreground-500">
          Empower your study sessions with our AI-driven platform! <br />{" "}
          Effortlessly generate tests, organize notes, and elevate your <br />{" "}
          learning experience to ace every subject.
        </p>
        <SignInButton size="lg" />
        {/* TODO: Some demos of working of the app */}
      </div>
    </div>
  );
}
