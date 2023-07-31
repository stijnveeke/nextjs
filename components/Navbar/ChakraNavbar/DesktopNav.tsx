"use client";
import { Stack } from "@chakra-ui/react";
import { NavItemProps, NavItem } from "./NavItem";

export const DesktopNav: React.FC<{ items: Array<NavItemProps> }> = ({
  items,
}) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      marginRight={"auto"}
      marginLeft={"auto"}
      spacing={4}
    >
      {items.map((item, index) => (
        <NavItem key={index} {...item} />
      ))}
    </Stack>
  );
};
