"use client";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ScrollSpyProvider } from "../components/Providers/ScrollSpyProvider";
import { NavbarDisclosureProvider } from "../components/Providers/NavbarDisclosureProvider";

export const ClientProviders: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <ChakraProvider>
      <NavbarDisclosureProvider>
        <ScrollSpyProvider>{children}</ScrollSpyProvider>
      </NavbarDisclosureProvider>
    </ChakraProvider>
  );
};
