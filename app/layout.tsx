import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider"


export const metadata: Metadata = {
  title: "Disney ",
  description: "Demo Projects purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body className="bg-white dark:bg-[#1A1C29]">
       
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
