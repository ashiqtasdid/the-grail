import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog - The Grail",
  description:
    "Get latest news and updates from The Grail. Stay up to date with the latest announcements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#252525] antialiased`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
