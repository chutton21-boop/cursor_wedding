import type { Metadata } from "next";
import { Cormorant_Upright, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Upright({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

const dmSans = DM_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Wedding",
  description: "A simple, elegant wedding site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
