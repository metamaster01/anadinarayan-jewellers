import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AnadiNarayan Jewellers - The Epitome of Luxury Jewelry",
  description: "Discover the finest luxury jewelry at AnadiNarayan Jewellers - where heritage meets modern elegance.",
  keywords: [
    "AnadiNarayan Jewellers",
    "Luxury Jewelry",
    "Heritage Jewelry",
    "Modern Jewelry",
    "Bridal Couture",
    "Diamond Jewelry",
    "Temple Gems",
    "Daily Luxury",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
