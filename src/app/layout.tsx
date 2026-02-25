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

export const metadata: Metadata = {
  title: "Akash Kharat | Senior Systems Architect | NestJS & IoT Expert",
  description: "Senior Software Engineer with 4.6 years of experience in Microservices, IoT Architecture, and Enterprise Cloud Orchestration. Specializing in NestJS, Next.js, and Docker.",
  keywords: ["NestJS Architect", "IoT Integrator", "Senior Node.js Developer", "Microservices Expert", "Akash Kharat Portfolio"],
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
