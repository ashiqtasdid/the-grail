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
    template: "%s Rules | The Grail",
    default: "The Grail Rules",
  },
  description:
    "Follow the rules and regulations of The Grail to ensure a safe and enjoyable experience for all.",
  openGraph: {
    title: "The Grail Rules",
    description:
    "Follow the rules and regulations of The Grail to ensure a safe and enjoyable experience for all.",
    url: "https://thegrail.vip/rules",
    siteName: "The Grail",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Grail Rules Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Grail Rules",
    description:
    "Follow the rules and regulations of The Grail to ensure a safe and enjoyable experience for all.",
    images: ["/assets/og-image.jpg"],
    site: "@TheGrail",
    creator: "@TheGrail",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  robots: "index, follow",
  keywords: "rules, grail rules, regulations, The Grail",
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
