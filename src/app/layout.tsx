import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { RocketCursor } from "@/components/RocketCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aaron Berlit - AI Engineer & Full Stack Developer",
  description: "Portfolio and digital lab of Aaron Berlit. Explore AI experiments, web apps, and system dev projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
    >
      <body className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans overflow-x-hidden cursor-none">
        <RocketCursor />
        {children}
      </body>
    </html>
  );
}
