import type { Metadata } from "next";
import "./globals.css";
import ProviderI18Next from "@/components/ProviderI18Next/i18next-provider";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin", "cyrillic"]
});

export const metadata: Metadata = {
  title: "Alex Prokopiev",
  description: "Portfolio of Alex Prokopiev - Full-Stack Developer",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: "portfolio, full-stack developer, Alex Prokopiev, web development, software engineer, projects, skills, experience, contact, resume, maker, coder, programmer, tech enthusiast, JavaScript, TypeScript, React, Node.js, Next.js, MongoDB, SQL, HTML, CSS, GitHub, LinkedIn, Telegram, CV", 
  };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
    <html lang="en">
      <body className={robotoMono.className}>
       <ProviderI18Next>{children}</ProviderI18Next>
      </body>
    </html>
  );
}