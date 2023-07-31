"use client";
import React from "react";
import { Heading } from "@chakra-ui/react";

export const HeaderTitle: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <Heading className="text-primary mb-2" as="h1">
      {children}
    </Heading>
  );
};
