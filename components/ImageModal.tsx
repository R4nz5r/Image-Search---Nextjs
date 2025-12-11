"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  X,
  Heart,
  Download,
  MapPin,
  Calendar,
  Camera,
  User,
  ExternalLink,
} from "lucide-react";
import type { ImageModalProps } from "@/types";

export function ImageModal({ image, isOpen, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !image) return null;

  const formatNumber = (num?: number | null) => {
    if (!num || isNaN(num)) return "0";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num.toString();
  };

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = image.links.download + "?force=true"; // Unsplash direct download
    link.download = `${image.id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative max-w-7xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[90vh]">
        {/* Image */}
        <div className="w-full lg:flex-1 relative bg-gray-100 min-h-[300px] lg:min-h-0">
          <Image
            src={image.urls.regular}
            alt={image.alt_description || "Unsplash image"}
            fill
            className="object-contain"
            priority
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-all duration-200"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="absolute bottom-4 right-4 z-10 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            <span>Download</span>
          </button>
        </div>

        {/* Details */}
        <div className="w-full lg:w-96 bg-white overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Header */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {image.alt_description || "Untitled Image"}
              </h2>
              {image.description && (
                <p className="text-gray-600 leading-relaxed">
                  {image.description}
                </p>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <Heart className="w-5 h-5 text-red-500 mx-auto mb-1" />
                <div className="text-lg font-semibold text-gray-900">
                  {formatNumber(image.likes)}
                </div>
                <div className="text-xs text-gray-500">Likes</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <Download className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                <div className="text-lg font-semibold text-gray-900">
                  {formatNumber(image.downloads)}
                </div>
                <div className="text-xs text-gray-500">Downloads</div>
              </div>
            </div>

            {/* Photographer */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Photographer
              </h3>
              <div className="flex items-center space-x-3">
                {image.user.profile_image?.medium ? (
                  <Image
                    src={image.user.profile_image.medium}
                    alt={image.user.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-600" />
                  </div>
                )}
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">
                    {image.user.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    @{image.user.username}
                  </p>
                </div>
                <a
                  href={image.user.links.html}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location */}
            {image.location?.name && (
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Location
                </h3>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{image.location.name}</span>
                </div>
              </div>
            )}

            {/* Camera Details */}
            {(image.exif?.make || image.exif?.model) && (
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Camera Details
                </h3>
                <div className="space-y-2 text-sm">
                  {image.exif?.make && image.exif?.model && (
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Camera className="w-4 h-4" />
                      <span>
                        {image.exif.make} {image.exif.model}
                      </span>
                    </div>
                  )}
                  {image.exif?.iso && (
                    <div className="text-gray-600">
                      <span className="font-medium">ISO:</span> {image.exif.iso}
                    </div>
                  )}
                  {image.exif?.aperture && (
                    <div className="text-gray-600">
                      <span className="font-medium">Aperture:</span> f/
                      {image.exif.aperture}
                    </div>
                  )}
                  {image.exif?.exposure_time && (
                    <div className="text-gray-600">
                      <span className="font-medium">Exposure:</span>{" "}
                      {image.exif.exposure_time}s
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Date */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Date Taken
              </h3>
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(image.created_at)}</span>
              </div>
            </div>

            {/* Tags */}
            {image.tags && image.tags.length > 0 && (
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {image.tags.slice(0, 10).map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tag.title}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
