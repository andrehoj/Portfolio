import type { Metadata } from "next";
import Nav from "../components/Nav/NavContainer";
import { Roboto, Bebas_Neue } from "next/font/google";
import "./globals.css";

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
  title: "Andrew Howran: Software developer",
  description: "Andrew is a Software devoloper residing in Canada",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.className} ${bebas_Neue.variable} `}>
      <link rel="icon" href="/favicon-96x96.png" sizes="any" />
      <body>
        <Nav />
        <main className="sections">{children}</main>
      </body>
    </html>
  );
}
