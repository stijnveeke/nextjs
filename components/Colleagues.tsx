"use client";
import React, { useContext } from "react";
import { HeaderTitle } from "./HeaderTitle";
import {
  Card,
  CardBody,
  Heading,
  Text,
  VStack,
  Stack,
  Grid,
  Box,
  Center,
} from "@chakra-ui/react";
import { ContentToHtml } from "./ContentToHtml";
import { CardStack } from "./CardStack";
import EComponentOptions from "../enums/EComponentOptions";
import { ContentContext } from "./Providers/ContentProvider";

export const Colleagues: React.FC<IColleagues> = ({
  title,
  variant,
  items,
  options,
}) => {
  const { getContent } = useContext(ContentContext);
  return (
    <div
      style={{
        textAlign: "left",
      }}
    >
      <HeaderTitle>{title}</HeaderTitle>

      {options.includes(EComponentOptions.noSubHeaders) ? (
        <CardStack
          cards={items.flatMap((item) => {
            const cards = item.content.map((card) => ({
              title: card.name,
              description: getContent(card.contentUrl),
              image: {
                path: card.image.path,
                alt: card.image.alt,
              },
            }));
            return cards;
          })}
          options={options}
          color="primary"
          variant={variant as any}
        />
      ) : (
        <>
          {items.map((item) => (
            <div key={item.title} className="p-2">
              <Heading as={"h2"} size={"lg"} className="text-primary">
                {item.title}
              </Heading>
              <CardStack
                cards={item.content.map((item) => ({
                  title: item.name,
                  description: getContent(item.contentUrl),
                  image: {
                    path: item.image.path,
                    alt: item.image.alt,
                  },
                }))}
                options={options}
                color="primary"
                variant={variant as any}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Colleagues;
