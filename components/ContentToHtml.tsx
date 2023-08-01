"use client";
import React, { useState } from "react";
import { Text, Box, Button } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

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
        className="content-styling"
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </Box>
      {noOfLines && (
        <Button onClick={toggleExpandedCount}>
          {expandedCount ? "Lees meer" : "Lees minder"}
        </Button>
      )}
    </>
  );
};
