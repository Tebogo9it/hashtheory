import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "HASHTHEORY | Transforming E-Waste into Education",
  description:
    "HashTheory is an NPC converting electronic waste into educational opportunities for communities in Soweto, South Africa. Join us in creating a sustainable future.",
  keywords: [
    "e-waste",
    "education",
    "Soweto",
    "South Africa",
    "sustainability",
    "recycling",
    "community",
    "technology",
  ],
  openGraph: {
    title: "HASHTHEORY | Transforming E-Waste into Education",
    description:
      "Converting electronic waste into educational opportunities for communities in Soweto.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${rajdhani.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
