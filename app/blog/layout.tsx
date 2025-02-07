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
  title: {
    template: '%s | The Grail Blog',
    default: 'The Grail Blog',
  },
  description: 'Get the latest news and updates from The Grail. Stay up to date with our latest announcements.',
  openGraph: {
    title: 'The Grail Blog',
    description: 'Get the latest news and updates from The Grail. Stay up to date with our latest announcements.',
    url: 'https://thegrail.vip/blog',
    siteName: 'The Grail',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Grail Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Grail Blog',
    description: 'Get the latest news and updates from The Grail. Stay up to date with our latest announcements.',
    images: '/assets/og-image.jpg',
    site: '@TheGrail',
    creator: '@TheGrail',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  robots: 'index, follow',
  keywords: 'blog, news, updates, announcements, The Grail',
  metadataBase: new URL('https://thegrail.vip'),
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
