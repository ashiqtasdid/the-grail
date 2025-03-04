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
  title: {
    template: "%s | The Grail",
    default: "The Grail - Home",
  },
  description:
    "Welcome to The Grail, your source for the latest news and updates.",
  openGraph: {
    title: "The Grail",
    description:
      "Welcome to The Grail, your source for the latest news and updates.",
    url: "https://thegrail.vip",
    siteName: "The Grail",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Grail Homepage Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Grail",
    description:
      "Welcome to The Grail, your source for the latest news and updates.",
    images: ["/assets/og-image.jpg"],
    site: "@TheGrail",
    creator: "@TheGrail",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  robots: "index, follow",
  keywords: "news, updates, The Grail",
  metadataBase: new URL("https://thegrail.vip"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
