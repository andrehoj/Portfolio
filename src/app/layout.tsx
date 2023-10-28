import type { Metadata } from "next";
import Nav from "../components/Nav/NavContainer";
import "./globals.css";
import { Roboto, Bebas_Neue } from "next/font/google";

const roboto = Roboto({
  variable: "--body",
  weight: "400",
  subsets: ["latin"],
});

const bebas_Neue = Bebas_Neue({
  weight: "400",
  variable: "--display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andrew Howran",
  description: "Andrews Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.className} ${bebas_Neue.variable} `}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
