import type { Metadata } from "next";
import Nav from "../components/Nav/NavContainer";
import { Roboto, Bebas_Neue } from "next/font/google";
import Head from "next/head";
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
  title: "Andrew Howran",
  description:
    "Hi! I'm Andrew, a Full Stack developer with a focus on MERN technologies. I current reside in Canada",
  keywords: [
    "FullStack Developer",
    "React",
    "JavaScript",
    "Node.js",
    "HTML",
    "CSS",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.className} ${bebas_Neue.variable} `}>
      <link rel="icon" href="/favicon-96x96.png" sizes="any" />
      <Head>
        <title>Andrew Howran</title>
        <meta
          name="description"
          content="Hi! I'm Andrew, a Full Stack developer with a focus on MERN technologies. I current reside in Canada"
        />
      </Head>
      <body>
        <Nav />
        <main className="sections">{children}</main>
      </body>
    </html>
  );
}
