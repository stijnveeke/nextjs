"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import Image from "next/image";

const FullWidthCarousel: React.FC<ICarouselWithCaption> = ({ cards }) => {
  const carouselStyle: React.CSSProperties = {
    height: "50vh", // Set your desired height here
  };
  return (
    <div
      className="carousel-container"
      style={{
        marginTop: "5rem",
      }}
    >
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        interval={5000} // Change slide every 5 seconds
      >
        {cards.map((card, i) => {
          return (
            <div className="carousel-slide" key={i} style={carouselStyle}>
              <Image
                fill={true}
                src={card.imageUrl ?? ""}
                alt={card.imageAlt ?? ""}
                objectFit="cover"
                style={{
                  objectPosition: card.objectPosition.base,
                }}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default FullWidthCarousel;
