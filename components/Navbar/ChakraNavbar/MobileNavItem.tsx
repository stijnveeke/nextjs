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
import { NavItemProps } from "./NavItem";

export const MobileNavItem: React.FC<{
  item: NavItemProps & {
    children?: Array<
      NavItemProps & {
        subLabel?: string;
      }
    >;
  };
  CloseDisclosure: () => void;
}> = ({ item, CloseDisclosure }) => {
  const { label, href, children } = item;
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack spacing={0} onClick={children && onToggle}>
      <Box
        cursor={"pointer"}
        py={2}
        as="a"
        {...(children
          ? { cursor: "pointer" }
          : {
              onClick: CloseDisclosure,
            })}
        href={"#" + href ?? "#"}
        justifyContent={"space-between"}
        display={"flex"}
        alignItems={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={"primary"}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={"primary"}
          align={"start"}
        >
          {children &&
            children.map((child, index) => (
              <Box
                cursor={"pointer"}
                as="a"
                key={index}
                href={child.href}
                onClick={CloseDisclosure}
              >
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
