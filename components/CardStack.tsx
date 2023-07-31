"use client";
import React, { useContext } from "react";
import { Grid } from "@chakra-ui/react";
import { ContentToHtml } from "./ContentToHtml";
import { Card } from "./Card";
import EComponentOptions from "../enums/EComponentOptions";

export const CardStack: React.FC<{
  variant?: "default" | "horizontal" | "no-image" | "no-image-horizontal";
  color: "default" | "primary" | "secondary" | "tertiary";
  options: Array<EComponentOptions>;
  cards: Array<{
    title: string;
    description: string;
    image?: {
      path: string;
      alt: string;
    };
    footer?: {
      content: React.ReactNode;
    };
  }>;
  stackSize?: {
    base?: string;
    sm?: string;
    md?: string;
    lg?: string;
  };
}> = ({
  variant = "default",
  color = "primary",
  cards = [],
  options = [],
  stackSize = {
    base: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    md: "repeat(2, 1fr)",
    lg: "repeat(3, 1fr)",
  },
}) => {
  return (
    <Grid
      templateColumns={{
        ...{
          ...(options.includes(EComponentOptions.horizontal)
            ? {
                base: stackSize.base ?? "repeat(1, 1fr)",
              }
            : {
                base: stackSize.base ?? "repeat(1, 1fr)",
                sm: stackSize.sm ?? stackSize.base ?? "repeat(1, 1fr)",
                md:
                  stackSize.md ??
                  stackSize.sm ??
                  stackSize.base ??
                  "repeat(1, 1fr)",
                lg:
                  stackSize.lg ??
                  stackSize.md ??
                  stackSize.sm ??
                  stackSize.base ??
                  "repeat(1, 1fr)",
              }),
        },
      }}
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          variant={variant}
          color={color}
          {...card}
          options={options}
        >
          {options.includes(EComponentOptions.useReadMore) ? (
            <ContentToHtml content={card.description} noOfLines={6} />
          ) : (
            <ContentToHtml content={card.description} />
          )}
        </Card>
      ))}
    </Grid>
  );
};
