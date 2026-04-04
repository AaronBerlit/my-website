import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

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
      <body className="min-h-screen bg-background text-foreground flex">
        <Sidebar />
        <main className="flex-1 ml-64 p-8 overflow-y-auto w-full min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
