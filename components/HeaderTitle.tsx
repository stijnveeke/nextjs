"use client";
import React from "react";
import { Heading } from "@chakra-ui/react";

export const HeaderTitle: React.FC<{
  children: React.ReactNode;
  asH1?: boolean;
}> = ({ children, asH1 = false }) => {
  return (
    <Heading className="text-primary mb-2" as={asH1 ? "h1" : "h2"}>
      {children}
    </Heading>
  );
};
