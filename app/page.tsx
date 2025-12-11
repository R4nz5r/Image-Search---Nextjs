"use client";

import { useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";
import { ImageGrid } from "@/components/ImageGrid";
import { ImageModal } from "@/components/ImageModal";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import type { UnsplashImage, UnsplashSearchResponse } from "@/types"; 

const Home = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState("nature");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const searchImages = async (query: string, page: number = 1) => {
    if (!query.trim()) return;
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
          query
        )}&page=${page}&per_page=20&client_id=${
          process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY
        }`
      );
      if (!response.ok) throw new Error("Failed to fetch images");

      const data: UnsplashSearchResponse = await response.json();

      if (page === 1) {
        setImages(data.results); // Reset images on new search
      } else {
        setImages((prev) => [...prev, ...data.results]); // Append more images
      }

      setTotalPages(data.total_pages);
      setCurrentPage(page); // Update current page correctly
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    searchImages(query, 1);
  };

  const loadMore = () => {
    if (!loading && currentPage < totalPages) {
      searchImages(searchQuery, currentPage + 1);
    }
  };

  const handleImageClick = (image: UnsplashImage) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  // Initial load
  useEffect(() => {
    searchImages(searchQuery, 1);
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 z-0"
        style={{
          background: `linear-gradient(to bottom, #a0d2eb, #e5eaf5, #d0bdf4, #8458B3, #a28089)`,
        }}
      ></div>
      <main className="relative z-10 min-h-screen mt-15">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Image Search
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover millions of high-quality, free images from photographers
              around the world.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12 ">
            <SearchBar onSearch={handleSearch} loading={loading} />
          </div>

          {/* Loading State */}
          {loading && images.length === 0 && (
            <div className="flex justify-center py-20">
              <LoadingSpinner size="lg" text="Searching images..." />
            </div>
          )}

          {/* Image Grid */}
          {images.length > 0 && (
            <>
              <ImageGrid
                images={images}
                loading={loading}
                onImageClick={handleImageClick}
              />

              {/* Load More Button */}
              {currentPage < totalPages && (
                <div className="flex justify-center mt-8">
                  <button
                    className="rounded-sm px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                    onClick={loadMore}
                    disabled={loading}
                    // className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Loading..." : "Load More Images"}
                  </button>
                </div>
              )}
            </>
          )}

          {/* Image Modal */}
          <ImageModal
            image={selectedImage}
            isOpen={!!selectedImage}
            onClose={closeModal}
          />

          {/* Back to Top Button */}
         
        </div>
      </main>
    </>
  );
};

export default Home;
