"use client";
import React from "react";
import { Stack } from "./Stack";
import Image from "next/image";
import { Heading, VStack, Text, Flex } from "@chakra-ui/react";
import { ContentToHtml } from "./ContentToHtml";
import { HeaderTitle } from "./HeaderTitle";

export default function About({ id, title, content, images }: IAbout) {
  return (
    <div
      style={{
        textAlign: "left",
      }}
    >
      <HeaderTitle>{title}</HeaderTitle>
      <Flex
        flexDirection={{
          base: "column",
          md: "row",
        }}
      >
        <div>
          <ContentToHtml content={content} />
        </div>
        {/* <VStack>
          {images.map((image, index) => (
            <Image
              className="p-2"
              src={image.path}
              alt={image.alt}
              width={350}
              height={200}
              style={{
                minWidth: "350px",
              }}
              key={index}
            />
          ))}
        </VStack> */}
      </Flex>
    </div>
  );
}
