"use client";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  IconButton,
  HStack,
  Link,
} from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import { MdFacebook, MdEmail, MdPhone } from "react-icons/md";

export default function SmallWithSocial() {
  return (
    <Box className="bg-tertiary text-primary p-1 border-b-2 border-primary border-solid z-10">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2023 dieren-manieren.nl. All rights reserved</Text>
        <HStack
          mt={{ lg: 0, md: 0 }}
          spacing={5}
          px={{
            base: 0,
            sm: 5,
          }}
          alignItems="flex-start"
        >
          <IconButton
            aria-label="facebook"
            variant="ghost"
            size="lg"
            isRound={true}
            className="hover:bg-primary"
            _hover={{ bg: "primary" }}
            icon={
              <Link
                href="https://www.facebook.com/profile.php?id=100092986851803"
                target="_blank"
              >
                <MdFacebook className="text-primaryHover" size="28px" />
              </Link>
            }
          />
          <IconButton
            aria-label="instagram"
            variant="ghost"
            size="lg"
            isRound={true}
            className="hover:bg-primary"
            _hover={{ bg: "primary" }}
            icon={
              <Link
                href="https://instagram.com/_dierenmanieren_?igshid=MzNlNGNkZWQ4Mg=="
                target="_blank"
              >
                <FaInstagram className="text-primaryHover" size="28px" />
              </Link>
            }
          />
          <IconButton
            aria-label="whatsapp"
            variant="ghost"
            size="lg"
            isRound={true}
            className="hover:bg-primary"
            _hover={{ bg: "primary" }}
            icon={
              <Link href="https://wa.me/31629178009" target="_blank">
                <FaWhatsapp className="text-primaryHover" size="28px" />
              </Link>
            }
          />
          <IconButton
            aria-label="whatsapp"
            variant="ghost"
            size="lg"
            isRound={true}
            className="hover:bg-primary"
            _hover={{ bg: "primary" }}
            icon={
              <Link href="mailto:info.dierenmanieren@gmail.com">
                <MdEmail className="text-primaryHover" size="28px" />
              </Link>
            }
          />
          <IconButton
            aria-label="whatsapp"
            variant="ghost"
            size="lg"
            isRound={true}
            className="hover:bg-primary"
            _hover={{ bg: "primary" }}
            icon={
              <Link href="tel:31629178009">
                <MdPhone className="text-primaryHover" size="28px" />
              </Link>
            }
          />
        </HStack>
      </Container>
    </Box>
  );
}
