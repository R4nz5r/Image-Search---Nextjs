import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { BackToTopButton } from "@/components/BackToTopButton";

export const metadata: Metadata = {
  title: "Image Search",
  description: "Search and discover beautiful images from Unsplash",
  keywords: "unsplash, images, search, photography, free images",
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
