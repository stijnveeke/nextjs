"use client";
import {
  Box,
  Popover,
  PopoverTrigger,
  Link,
  PopoverContent,
  Stack,
  Text,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { ScrollSpyContext } from "../../Providers/ScrollSpyProvider";

export interface NavItemProps {
  label: string;
  href: string;
}

export const NavItem: React.FC<
  NavItemProps & {
    children?: Array<
      NavItemProps & {
        subLabel?: string;
      }
    >;
  }
> = ({ label, href, children }) => {
  const context = useContext(ScrollSpyContext);
  return (
    <Box key={label}>
      <Popover trigger={"hover"} placement={"bottom-start"}>
        <PopoverTrigger>
          <Link
            p={2}
            href={href ?? "#"}
            fontWeight={500}
            color={"primary"}
            _hover={{
              textDecoration: "none",
            }}
            className="text-primary hover:text-primaryHover px-3 py-2 rounded-md"
            data-to-scroll-spy-id={href.replace("#", "")}
          >
            {label}
          </Link>
        </PopoverTrigger>
        {children && (
          <PopoverContent
            border={0}
            boxShadow={"xl"}
            bg={"tertiary"}
            className="bg-tertiary"
            p={4}
            rounded={"xl"}
            minW={"sm"}
          >
            <Stack>
              {children.map((child, index) => (
                <NavSubItem key={index} {...child} />
              ))}
            </Stack>
          </PopoverContent>
        )}
      </Popover>
    </Box>
  );
};

const NavSubItem: React.FC<NavItemProps & { subLabel?: string }> = ({
  label,
  href,
  subLabel,
}) => {
  return (
    <Link
      href={href ?? "#"}
      display={"block"}
      role="group"
      rounded={"md"}
      _hover={{
        textDecoration: "none",
      }}
      className="text-primary hover:text-primaryHover px-3 py-2 rounded-md"
      p={2}
    >
      <Stack direction={"row"} align={"center"} textAlign={"start"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            fontWeight={500}
            _groupHover={{ color: "primaryBold" }}
          >
            {label}
          </Text>
          <Text
            transition={"all .3s ease"}
            fontSize={"sm"}
            _groupHover={{ color: "primaryBold" }}
          >
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};
