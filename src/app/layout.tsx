import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_core/components/Navbar/Navbar";
import { Plus_Jakarta_Sans } from "next/font/google";
import Particle from "./_core/components/Particles/Particles";


const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],    
  display: "swap",
});

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className}`}>
        <div>
          <Particle></Particle>
        </div>
        <div className="dark:bg-main flex flex-col min-h-screen ">
          <Navbar></Navbar>
          <div className="container mx-auto sm:px-10 px-5 flex-1 min-h-[calc(100vh-100px)] overflow-x-hidden z-10 relative">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
