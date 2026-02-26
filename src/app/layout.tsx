import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

import mockData from "@/data/mockData.json";

export const metadata: Metadata = {
  title: mockData.metadata.title,
  description: mockData.metadata.description,
  keywords: mockData.metadata.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased selection:bg-industrial-blue/30 selection:text-industrial-blue`}
      >
        <div className="fixed inset-0 tech-grid -z-10" />
        <main className="min-h-screen relative">
          {children}
        </main>
      </body>
    </html>
  );
}
