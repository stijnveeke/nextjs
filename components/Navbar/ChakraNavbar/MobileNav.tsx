"use client";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Stack,
  useDisclosure,
  Text,
  Icon,
  Collapse,
} from "@chakra-ui/react";
import React from "react";
import { MobileNavItem } from "./MobileNavItem";
import { NavItemProps } from "./NavItem";

export const MobileNav: React.FC<{
  items: Array<NavItemProps>;
  CloseDisclosure: () => void;
}> = ({ items, CloseDisclosure }) => {
  return (
    <Stack
      bg="tertiary"
      className="bg-tertiary h-full"
      display={{ xl: "none" }}
      p={4}
    >
      {items.map((item, index) => (
        <MobileNavItem
          key={index}
          item={item}
          CloseDisclosure={CloseDisclosure}
        />
      ))}
    </Stack>
  );
};
