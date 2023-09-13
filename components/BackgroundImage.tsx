"use client";
import { Skeleton } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";

export const BackgroundImage: React.FC<{
  src: string;
  alt: string;
}> = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  return loaded ? (
    <Skeleton width="100%" height="100%" />
  ) : (
    <Image
      alt={alt}
      src={src}
      quality={100}
      fill
      sizes="100vw"
      onLoad={(e) => {
        console.log("loaded");
      }}
      style={{
        objectPosition: "50% 30%",
        objectFit: "cover",
      }}
    />
  );
};
