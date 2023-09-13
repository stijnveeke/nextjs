"use client";

import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import Image from "next/image";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const CarouselWithCaption: React.FC<ICarouselWithCaption> = ({
  cards,
}) => {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  // const cards = [
  //   {
  //     title: "Design Projects 1",
  //     text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
  //     image:
  //       "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  //   },
  //   {
  //     title: "Design Projects 2",
  //     text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
  //     image:
  //       "https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80",
  //   },
  //   {
  //     title: "Design Projects 3",
  //     text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
  //     image:
  //       "https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  //   },
  // ];

  return (
    <Box
      position="relative"
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Image fill={true} src={cards[0].imageUrl} alt={"test"} />
    </Box>
  );
};

export default CarouselWithCaption;
