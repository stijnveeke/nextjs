"use client";
import React from "react";
import {
  Card as ChakraCard,
  Image,
  Stack,
  Heading,
  CardBody,
  CardFooter,
  Divider,
} from "@chakra-ui/react";
import EComponentOptions from "../enums/EComponentOptions";

export const Card: React.FC<{
  variant?: "default" | "horizontal" | "no-image" | "no-image-horizontal";
  color: "default" | "primary" | "secondary" | "tertiary";
  title: string;
  image?: {
    path: string;
    alt: string;
  };
  children: React.ReactNode;
  options: Array<EComponentOptions>;
  footer?: {
    content: React.ReactNode;
  };
}> = ({ variant, color, title, image, children, options, footer }) => {
  return (
    <ChakraCard
      {...{
        ...{
          ...(options.includes(EComponentOptions.horizontal)
            ? {
                direction: {
                  base: "column",
                  sm: "row",
                },
                mx: {
                  base: "auto",
                  sm: 2,
                },
                my: {
                  base: 2,
                },
              }
            : {
                maxW: "md",
                m: 2,
              }),
        },
      }}
      overflow="hidden"
      variant={"outline"}
      border={
        options.includes(EComponentOptions.horizontal) ? "1px solid" : "none"
      }
      borderColor={"chakra-border-color"}
      roundedTop={
        options.includes(EComponentOptions.horizontal) ? "md" : "none"
      }
      roundedBottom={
        options.includes(EComponentOptions.horizontal) ? "md" : "none"
      }
    >
      {!options.includes(EComponentOptions.noImage) && (
        <Image
          objectFit="cover"
          borderTopRadius={
            options.includes(EComponentOptions.horizontal) ? "none" : "md"
          }
          {...{
            ...{
              ...(options.includes(EComponentOptions.horizontal)
                ? {
                    maxW: { base: "100%", sm: "200px" },
                  }
                : {
                    maxW: { base: "100%" },
                    h: {
                      base: "auto",
                      sm: "250px",
                      md: "300px",
                      lg: "350px",
                    },
                  }),
            },
          }}
          src={image ? image.path : ""}
          alt={image ? image.alt : ""}
        />
      )}
      <Stack
        border={
          options.includes(EComponentOptions.horizontal) ? "none" : "1px solid"
        }
        borderColor={"chakra-border-color"}
        borderBottomRadius={"md"}
        borderTopRadius={
          options.includes(EComponentOptions.noImage) &&
          !options.includes(EComponentOptions.horizontal)
            ? "md"
            : "none"
        }
      >
        <CardBody>
          {!options.includes(EComponentOptions.noTitle) && (
            <Heading size="md">{title}</Heading>
          )}
          {!options.includes(EComponentOptions.noContent) && <>{children}</>}
        </CardBody>
        {!options.includes(EComponentOptions.noPrice) && footer && (
          <>
            <Divider />
            <CardFooter>{footer.content}</CardFooter>
          </>
        )}
      </Stack>
    </ChakraCard>
  );
};
