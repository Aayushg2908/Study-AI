import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "@/components/providers/NextUIProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "StudyAI",
  description: "Study for exams using the power of AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        elements: {
          footerActionLink: "text-cyan-400 hover:text-cyan-500",
        },
      }}
    >
      <html lang="en">
        <body className={poppins.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
