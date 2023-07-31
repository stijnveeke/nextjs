"use client";
import { Button } from "@chakra-ui/react";
import React from "react";
import Icon from "./Icon";

export const ButtonWithIcon: React.FC<{
  children: React.ReactNode;
  icon: string;
  size?: "sm" | "md" | "lg" | "xs" | "xl";
  variant?: "solid" | "outline" | "ghost" | "link";
  bg?: "primary" | "secondary" | "tertiary" | string;
  colorScheme?: "primary" | "secondary" | "tertiary" | "quaternary";
  height?: string;
  width?: string;
  className?: string;
}> = ({
  children,
  icon,
  size,
  variant,
  bg,
  colorScheme,
  height,
  width,
  className,
}) => {
  return (
    <Button
      size={size ?? "sm"}
      height={height ?? "50px"}
      width={width ?? "200px"}
      variant={variant ?? "solid"}
      color={colorScheme ?? "primary"}
      bg={bg ?? "tertiary"}
      className={
        className
          ? className +
            "text-primary hover:text-primaryHover px-3 py-2 rounded-md"
          : "text-primary hover:text-primaryHover px-3 py-2 rounded-md"
      }
      leftIcon={<Icon iconTag={icon} size={"20px"} />}
    >
      {children}
    </Button>
  );
};
