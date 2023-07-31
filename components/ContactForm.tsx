"use client";

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Grid,
  Center,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { ButtonWithIcon } from "./ButtonWithIcon";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export const ContactForm: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  return (
    <Container
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
      p={{
        base: 0,
        md: 4,
      }}
    >
      {/* <Flex className={"w-full"}> */}
      <Box
        className={"md:bg-tertiary bg-white text-primary w-full flex"}
        borderRadius="lg"
        m={{ sm: 0, md: 16, lg: 10 }}
        p={{ sm: 0, md: 5, lg: 16 }}
      >
        <Box
          p={{
            sm: 0,
            md: 5,
          }}
          className="w-full"
        >
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              lg: "repeat(2, 1fr)",
            }}
          >
            <Box className="col-span-1 lg:col-span-2">
              <Heading>Contact</Heading>
            </Box>
            <Box>
              <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                {!isLoaded ? (
                  <Text>Loading...</Text>
                ) : (
                  <div
                    style={{
                      width: "auto",
                      height: "20em",
                      borderRadius: "lg",
                    }}
                  >
                    <GoogleMap
                      center={{
                        lat: 51.5333611931948,
                        lng: 4.343005184654583,
                      }}
                      mapContainerClassName="w-full h-full rounded-lg"
                      zoom={15}
                    >
                      <Marker
                        key="marker_1"
                        position={{
                          lat: 51.533353397261045,
                          lng: 4.342936489382714,
                        }}
                      />
                    </GoogleMap>
                  </div>
                )}
              </Box>
              <HStack
                mb={10}
                spacing={5}
                px={{
                  base: 0,
                  sm: 5,
                }}
                alignItems="center"
                justifyContent={"center"}
              >
                <IconButton
                  aria-label="facebook"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  p={4}
                  className="hover:bg-primary"
                  _hover={{ bg: "primary" }}
                  icon={
                    <Link
                      href="https://www.google.com/maps/dir//Moerstraatseweg+40,+4727+SK+Moerstraten/@51.5329121,4.3398717,16z/data=!4m18!1m8!3m7!1s0x47c41496ed322317:0x69aff8a01f3a62f7!2sMoerstraatseweg+40,+4727+SK+Moerstraten!3b1!8m2!3d51.5333979!4d4.3430481!16s%2Fg%2F11c5qff8y7!4m8!1m0!1m5!1m1!1s0x47c41496ed322317:0x69aff8a01f3a62f7!2m2!1d4.3430481!2d51.5333979!3e3?entry=ttu"
                      target="_blank"
                    >
                      <Flex>
                        <MdLocationOn
                          className="text-primaryHover mr-2 my-2"
                          size="28px"
                        />
                        Moerstraatseweg 40 <br />
                        4727SK Moerstraten
                      </Flex>
                    </Link>
                  }
                />
              </HStack>
            </Box>
            <Box pb={{ base: 5, sm: 5, md: 8, lg: 10 }} className="justify">
              <Center
                className="max-w-full"
                display={{
                  base: "block",
                  sm: "flex",
                }}
              >
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
                        <FaInstagram
                          className="text-primaryHover"
                          size="28px"
                        />
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
              </Center>
              <Center
                alignItems={"flex-start"}
                display={{
                  base: "block",
                  sm: "flex",
                }}
                width={{
                  base: "100%",
                  sm: "auto",
                }}
              >
                <Box
                  bg="tertiary"
                  borderRadius="lg"
                  width={{
                    base: "100%",
                    sm: "600px",
                    lg: "400px",
                  }}
                  py={2}
                >
                  <Box
                    m={{
                      base: 0,
                      sm: 8,
                    }}
                    color="#0B0E3F"
                  >
                    <VStack spacing={5}>
                      <FormControl id="name" className="w-full">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson
                              color="primaryHover"
                              className="text-primaryHover"
                            />
                          </InputLeftElement>
                          <Input
                            type="text"
                            bg={"white"}
                            size="md"
                            className="focus:border-primary focus:border-3"
                            _focusVisible={{
                              borderColor: "primary",
                            }}
                            _hover={{
                              borderColor: "primary",
                            }}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup
                          borderColor="primary"
                          className="focus:border-primary"
                          _focusVisible={{
                            borderColor: "red",
                          }}
                        >
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail
                              color="primaryHover"
                              className="text-primaryHover"
                            />
                          </InputLeftElement>
                          <Input
                            type="text"
                            bg={"white"}
                            size="md"
                            className="focus:border-primary focus:border-3"
                            _focusVisible={{
                              borderColor: "primary",
                            }}
                            _hover={{
                              borderColor: "primary",
                            }}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          bg={"white"}
                          className="focus:border-primary focus:border-3"
                          _focusVisible={{
                            borderColor: "primary",
                          }}
                          _hover={{
                            borderColor: "primary",
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          color="white"
                          bg="primary"
                          className="bg-primary hover:bg-primaryHover"
                          _hover={{
                            bg: "primaryHover",
                          }}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </Center>
            </Box>
          </Grid>
        </Box>
      </Box>
      {/* </Flex> */}
    </Container>
  );
};

export default ContactForm;
