"use client";

import { carrouselImages } from "@/app/constants";
import { useEffect, useState } from "react";

export default function Carrousel() {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const index = setInterval(() => {
      currentImage === carrouselImages.length - 1
        ? setCurrentImage(0)
        : setCurrentImage((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(index);
  }, [currentImage]);
  return (
    <div
      style={{ backgroundImage: `url(${carrouselImages[currentImage].url})` }}
      className="w-full h-full rounded-xl bg-center bg-cover transition-all duration-1000 group-hover:opacity-80"
    ></div>
  );
}
