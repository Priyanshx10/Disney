import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";


export const metadata: Metadata = {
  title: "AI Movies",
  description: "Demo Projects purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body>
        <Header />
        {children}</body>
    </html>
  );
}
