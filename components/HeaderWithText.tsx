"use client";
import React from "react";
import { Stack } from "./Stack";
import Image from "next/image";
import { Heading, VStack, Text } from "@chakra-ui/react";
import { ContentToHtml } from "./ContentToHtml";
import { HeaderTitle } from "./HeaderTitle";

export default function HeaderWithText({
  title,
  content,
}: IIntroduction | ISupervision) {
  return (
    <div
      style={{
        textAlign: "left",
      }}
    >
      <HeaderTitle>{title}</HeaderTitle>

      <ContentToHtml content={content} />
    </div>
  );
}
