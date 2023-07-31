"use client";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";

export const NavbarDisclosureContext = React.createContext<{
  isOpen: boolean;
  onToggle: () => void;
}>({
  isOpen: false,
  onToggle: () => {},
});

export const NavbarDisclosureProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { isOpen, onToggle } = useDisclosure();
  const onToggleDisclosure = () => {
    onToggle();
    if (!isOpen) {
      document.getElementsByTagName("html")[0].classList.add("overflow-hidden");
    } else {
      document
        .getElementsByTagName("html")[0]
        .classList.remove("overflow-hidden");
    }
  };

  return (
    <NavbarDisclosureContext.Provider
      value={{ isOpen, onToggle: onToggleDisclosure }}
    >
      {children}
    </NavbarDisclosureContext.Provider>
  );
};
