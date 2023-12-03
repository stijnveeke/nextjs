"use client";
import { Container } from "@chakra-ui/react";
import React from "react";

export const PageContent: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <Container bg="transparent" maxW="container.lg" mt={0}>
      {children}
    </Container>
  );
};

export default PageContent;
