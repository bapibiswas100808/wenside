"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryImage = { src: string; alt: string };

export default function ProductGallery({ images, title }: { images: GalleryImage[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  return (
    <div className="product-gallery">
      <div className="detail-image">
        {activeImage ? (
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            priority
            sizes="(max-width: 760px) 100vw, 52vw"
          />
        ) : (
          <div className="missing-product-image"><span>PRODUCT IMAGE</span><strong>{title}</strong><small>Image to be confirmed</small></div>
        )}
        {activeImage && <span className="image-note">WENSIDE CATALOGUE IMAGE</span>}
      </div>
      {images.length > 1 && (
        <div className="gallery-thumbnails" aria-label={`${title} image gallery`}>
          {images.map((galleryImage, index) => (
            <button
              aria-label={`View image ${index + 1} of ${images.length}`}
              aria-pressed={activeIndex === index}
              className={activeIndex === index ? "is-active" : ""}
              key={galleryImage.src}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              <Image src={galleryImage.src} alt="" fill sizes="100px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
