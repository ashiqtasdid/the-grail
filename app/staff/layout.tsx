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
  title: {
    template: "%s | The Grail Staff",
    default: "The Grail Staff",
  },
  description:
    "Meet the dedicated team behind The Grail. Learn more about our staff and their roles.",
  openGraph: {
    title: "The Grail Staff",
    description:
      "Meet the dedicated team behind The Grail. Learn more about our staff and their roles.",
    url: "https://thegrail.vip/staff",
    siteName: "The Grail",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Grail Staff",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Grail Staff",
    description:
      "Meet the dedicated team behind The Grail. Learn more about our staff and their roles.",
    images: ["/assets/og-image.jpg"],
    site: "@TheGrail",
    creator: "@TheGrail",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  robots: "index, follow",
  keywords: "staff, team, The Grail",
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
        className={`${geistSans.variable} ${geistMono.variable} bg-[#252525] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
