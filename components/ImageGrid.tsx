"use client";

import { ImageCard } from "./ImageCard";
import { LoadingSpinner } from "./LoadingSpinner";
import type { ImageGridProps } from "@/types";

export function ImageGrid({ images, loading, onImageClick }: ImageGridProps) {
  if (images.length === 0 && !loading) {
    return (
      <div className="text-center py-20">
        <div className="text-gray-400 text-6xl mb-4">📸</div>
        <h3 className="text-2xl font-semibold text-gray-600 mb-2">
          No images found
        </h3>
        <p className="text-gray-500">
          Try searching for something else or browse our featured collections
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {images.length > 0 && (
        <div className="text-center">
          <p className="text-gray-600">
            Found{" "}
            <span className="font-semibold text-gray-900">{images.length}</span>{" "}
            amazing images
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <ImageCard
            key={`${image.id}-${index}`}
            image={image}
            onClick={() => onImageClick(image)} // now works
          />
        ))}
      </div>

      {loading && images.length > 0 && (
        <div className="flex justify-center items-center py-8">
          <LoadingSpinner size="md" text="Loading more images..." />
        </div>
      )}
    </div>
  );
}
