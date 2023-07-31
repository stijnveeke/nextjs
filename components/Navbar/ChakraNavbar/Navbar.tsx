"use client";
import React from "react";
import logo from "../../../assets/images/dierenmanieren.png";
import { motion } from "framer-motion";
import {
  Box,
  Flex,
  Text,
  Link,
  Stack,
  IconButton,
  Collapse,
  Grid,
  VStack,
  HStack,
  Center,
} from "@chakra-ui/react";
import { DesktopNav } from "./DesktopNav";
import { NavItemProps } from "./NavItem";
import { MdMail, MdPhone } from "react-icons/md";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MobileNav } from "./MobileNav";
import { isArrayBuffer } from "util/types";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { NavbarDisclosureContext } from "../../Providers/NavbarDisclosureProvider";

export const NavBar: React.FC<{
  items: Array<NavItemProps>;
}> = ({ items }) => {
  const { isOpen, onToggle } = React.useContext(NavbarDisclosureContext);
  const CloseDisclosure = () => {
    if (isOpen) {
      onToggle();
    }
  };

  return (
    <Box marginTop={110} display={{ base: "relative", lg: "block" }}>
      <Flex
        className={
          "bg-tertiary text-primary p-1 border-b-2 border-primary border-solid z-10"
        }
        position={"fixed"}
        top={0}
        width="100%"
      >
        <Grid templateColumns={"repeat(5, 1fr)"} className="w-full">
          <Flex
            display={{ base: "flex", xl: "none" }}
            ml={{ base: -2 }}
            className="col-span-1"
            alignItems={"center"}
            pl={4}
          >
            <IconButton
              onClick={onToggle}
              aria-label="Open menu"
              isRound={true}
              className="hover:bg-primaryHover"
              _hover={{ bg: "primaryHover" }}
              icon={
                isOpen ? (
                  <IoMdClose className="text-primary" size="28px" />
                ) : (
                  <IoMdMenu className="text-primary" size="28px" />
                )
              }
              variant={"ghost"}
            />
          </Flex>
          <Link
            className="col-span-3 xl:col-span-1"
            href="#introduction"
            textAlign={"left"}
            fontFamily={"heading"}
            justifyContent={{
              base: "center",
              xl: "start",
            }}
            alignItems={"center"}
            display={{
              base: "flex",
              xl: "block",
            }}
            color={"gray.800"}
          >
            <img src={logo.src} alt="logo" width="75" height="75" />
          </Link>

          <Flex
            display={{ base: "none", xl: "flex" }}
            ml={"auto"}
            mr={"auto"}
            justify={"center"}
            className="col-span-3"
          >
            <DesktopNav items={items} />
          </Flex>

          <VStack
            display={{ base: "flex", xl: "none" }}
            className="col-span-1"
            justify={"flex-end"}
            direction={"row"}
            alignItems={"center"}
            spacing={0}
          >
            <HStack>
              <IconButton
                aria-label="mail"
                variant="ghost"
                onClick={CloseDisclosure}
                size="lg"
                isRound={true}
                className="hover:bg-primaryHover"
                _hover={{ bg: "primaryHover" }}
                icon={
                  <Link
                    href="https://www.facebook.com/profile.php?id=100092986851803"
                    target="_blank"
                  >
                    <FaFacebook className="text-primary" size="28px" />
                  </Link>
                }
              />
              <IconButton
                aria-label="mail"
                variant="ghost"
                onClick={CloseDisclosure}
                size="lg"
                isRound={true}
                className="hover:bg-primaryHover"
                _hover={{ bg: "primaryHover" }}
                icon={
                  <Link href="#introduction" target="_blank">
                    <FaInstagram className="text-primary" size="28px" />
                  </Link>
                }
              />
              <IconButton
                aria-label="mail"
                variant="ghost"
                onClick={CloseDisclosure}
                size="lg"
                isRound={true}
                className="hover:bg-primaryHover"
                _hover={{ bg: "primaryHover" }}
                icon={
                  <Link href="https://wa.me/31629178009" target="_blank">
                    <FaWhatsapp className="text-primary" size="28px" />
                  </Link>
                }
              />
            </HStack>
            <HStack>
              <IconButton
                aria-label="mail"
                variant="ghost"
                size="lg"
                onClick={CloseDisclosure}
                isRound={true}
                className="hover:bg-primaryHover"
                _hover={{ bg: "primaryHover" }}
                icon={
                  <Link href="mailto:info.dierenmanieren@gmail.com">
                    <MdMail className="text-primary" size="28px" />
                  </Link>
                }
              />
              <IconButton
                aria-label="mobile"
                variant="ghost"
                size="lg"
                onClick={CloseDisclosure}
                isRound={true}
                className="hover:bg-primaryHover"
                _hover={{ bg: "primaryHover" }}
                icon={
                  <Link href="tel:31629178009">
                    <MdPhone className="text-primary" size="28px" />
                  </Link>
                }
              />
            </HStack>
          </VStack>
          <Stack
            flex={{ base: 1, md: 0 }}
            display={{ base: "none", xl: "flex" }}
            justify={"flex-end"}
            direction={"row"}
            alignItems={"center"}
            spacing={6}
          >
            <IconButton
              aria-label="mail"
              variant="ghost"
              size="lg"
              onClick={CloseDisclosure}
              isRound={true}
              className="hover:bg-primaryHover"
              _hover={{ bg: "primaryHover" }}
              icon={
                <Link
                  href="https://www.facebook.com/profile.php?id=100092986851803"
                  target="_blank"
                >
                  <FaFacebook className="text-primary" size="28px" />
                </Link>
              }
            />
            <IconButton
              aria-label="mail"
              variant="ghost"
              size="lg"
              onClick={CloseDisclosure}
              isRound={true}
              className="hover:bg-primaryHover"
              _hover={{ bg: "primaryHover" }}
              icon={
                <Link href="#introduction" target="_blank">
                  <FaInstagram className="text-primary" size="28px" />
                </Link>
              }
            />
            <IconButton
              aria-label="mail"
              variant="ghost"
              size="lg"
              onClick={CloseDisclosure}
              isRound={true}
              className="hover:bg-primaryHover"
              _hover={{ bg: "primaryHover" }}
              icon={
                <Link href="https://wa.me/31629178009" target="_blank">
                  <FaWhatsapp className="text-primary" size="28px" />
                </Link>
              }
            />
            <IconButton
              aria-label="mail"
              variant="ghost"
              size="lg"
              onClick={CloseDisclosure}
              isRound={true}
              className="hover:bg-primaryHover"
              _hover={{ bg: "primaryHover" }}
              icon={
                <Link href="mailto:info.dierenmanieren@gmail.com">
                  <MdMail className="text-primary" size="28px" />
                </Link>
              }
            />
            <IconButton
              aria-label="mobile"
              variant="ghost"
              size="lg"
              onClick={CloseDisclosure}
              isRound={true}
              className="hover:bg-primaryHover"
              _hover={{ bg: "primaryHover" }}
              icon={
                <Link href="tel:31629178009">
                  <MdPhone className="text-primary" size="28px" />
                </Link>
              }
            />
          </Stack>
        </Grid>
      </Flex>

      <Collapse
        className="fixed w-full z-10 bg-tertiary base:h-full"
        style={{
          top: "100px",
          maxHeight: "80vh",
          overflowY: "scroll",
        }}
        in={isOpen}
        animateOpacity
      >
        <MobileNav items={items} CloseDisclosure={CloseDisclosure} />
      </Collapse>
    </Box>
  );
};

export default NavBar;
