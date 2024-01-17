import { Toaster } from "sonner";
import { Navbar } from "./_components/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full">
      <Navbar />
      {children}
      <Toaster richColors position="top-center" />
    </div>
  );
};

export default MainLayout;
