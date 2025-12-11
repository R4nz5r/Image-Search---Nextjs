"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageModal } from "./ImageModal";
import type { UnsplashImage } from "@/types";

interface ImageCardProps {
  image: UnsplashImage;
  onClick?: () => void;
}

export function ImageCard({ image }: ImageCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200"
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src={image.urls.small} // smaller version for grid
          alt={image.alt_description || "Unsplash image"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <ImageModal
          image={image}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
