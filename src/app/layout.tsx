import type { Metadata } from "next";
import "./globals.css";
import ClientRoot from "./ClientRoot";


export const metadata: Metadata = {
  title: "Nathan Ong",
  description: "Nathan Ong's Portfolio",
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
      <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
