"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type PostImage = {
  src: string;
  alt: string;
  link?: string;
};

interface ImageGridProps {
  images: PostImage[];
}

export default function ImageGrid({ images }: ImageGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const count = images.length;

  const openModal = (index: number) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);

  const nextImage = () => {
    if (activeIndex !== null) {
      setActiveIndex((activeIndex + 1) % count);
    }
  };

  const prevImage = () => {
    if (activeIndex !== null) {
      setActiveIndex((activeIndex - 1 + count) % count);
    }
  };

  // Keyboard Events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;

      if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, count]);

  const renderImage = (img: PostImage, index: number, extraClasses = "") => (
    <button
      key={index}
      onClick={() => openModal(index)}
      className={`w-full h-full focus:outline-none ${extraClasses}`}
    >
      <Image
        src={img.src}
        alt={img.alt}
        width={400}
        height={400}
        className="object-cover w-full h-full"
      />
    </button>
  );

  return (
    <div className="mb-3" onClick={(e)=>e.stopPropagation()}>
      {/* Image Grid */}
      {count === 1 && (
        <div className="rounded-lg overflow-hidden h-[45vh]">
          {renderImage(images[0], 0)}
        </div>
      )}

      {count === 2 && (
        <div className="grid grid-cols-2 gap-1 rounded-lg overflow-hidden h-[45vh]">
          {images.map((img, index) => renderImage(img, index))}
        </div>
      )}

      {count === 3 && (
        <div className="grid grid-cols-2 grid-rows-2  gap-1 rounded-lg overflow-hidden h-[45vh]">
          <div className="col-span-1 row-span-2">
            {renderImage(images[0], 0)}
          </div>
          <div className="">
            {images
              .slice(1, 3)
              .map((img, index) => renderImage(img, index + 1,"h-[50%]"))}
          </div>
        </div>
      )}

      {count >= 4 && (
        <div className="grid grid-cols-2 grid-rows-2 gap-1 rounded-lg overflow-hidden h-[45vh]">
          {images.slice(0, 4).map((img, index) => renderImage(img, index))}
        </div>
      )}

      {/* Modal with Arrows */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              width={800}
              height={800}
              className="rounded-lg object-contain max-w-screen max-h-screen"
            />
            {/* Prev Button */}
            {count > 1 && (
              <>
                {/* <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 focus:outline-none"
                >
                  ←
                </button> */}
                {/* Next Button */}
                {/* <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 focus:outline-none"
                >
                  →
                </button> */}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
