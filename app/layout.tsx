import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { BackToTopButton } from "@/components/BackToTopButton";

export const metadata: Metadata = {
  title: "Image Search",
  description: "Search and discover beautiful images from Unsplash",
  keywords: "unsplash, images, search, photography, free images",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" }, // main favicon
      { url: "/favicon.svg", type: "image/svg+xml" }, // optional SVG
    ],
    shortcut: [{ url: "/favicon.png" }], // works in most browsers
    apple: [{ url: "/favicon.png" }], // iOS
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <Navbar />
        {children}
        <BackToTopButton />
      </body>
    </html>
  );
}
