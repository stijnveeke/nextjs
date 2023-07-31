"use client";
import React, { useState } from "react";
import { Text, Box, Button } from "@chakra-ui/react";

export const ContentToHtml: React.FC<{
  content: string;
  noOfLines?: number;
}> = ({ content, noOfLines }) => {
  const [expandedCount, setExpandedCount] = useState(noOfLines);

  const toggleExpandedCount = () => {
    setExpandedCount((prev) => (prev ? undefined : noOfLines));
  };

  if (!content) return <></>;
  return (
    <>
      <Box
        {...(expandedCount && {
          noOfLines: expandedCount,
        })}
      >
        {content}
      </Box>
      {noOfLines && (
        <Button onClick={toggleExpandedCount}>
          {expandedCount ? "Read More" : "Read Less"}
        </Button>
      )}
    </>
  );
};
