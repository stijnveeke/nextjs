"use client";
import React, { useContext } from "react";
import { HeaderTitle } from "./HeaderTitle";
import { CardStack } from "./CardStack";
import { ContentContext } from "./Providers/ContentProvider";

export const Services: React.FC<IServices> = ({
  title,
  items,
  options,
  variant,
}) => {
  const { getContent } = useContext(ContentContext);
  return (
    <div
      style={{
        textAlign: "left",
      }}
    >
      <HeaderTitle>{title}</HeaderTitle>

      <CardStack
        stackSize={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        cards={items.flatMap((item) => {
          return {
            title: item.title,
            description: getContent(item.contentUrl),
            price: item.price,
            footer: {
              content: <>{item.price}</>,
            },
          };
        })}
        options={options}
        color="primary"
        variant={variant as any}
      />
    </div>
  );
};

export default Services;
