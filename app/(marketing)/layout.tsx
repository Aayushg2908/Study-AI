import { Navbar } from "./_components/Navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <Navbar />
      {children}
    </div>
  );
};

export default MarketingLayout;
