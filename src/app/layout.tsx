import type { Metadata } from "next";
import { Manrope, Space_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { TopNav } from "@/components/home/TopNav";
import { NavBar } from "@/components/NavBar";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EduTech Express | Study Abroad",
  description:
    "Study abroad counseling website template for destinations, events, and student success stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TopNav />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
