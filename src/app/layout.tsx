import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar"

export const metadata: Metadata = {
  title: "Nathan Ong",
  description: "Nathan Ong's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
