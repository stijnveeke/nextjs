import React from "react";
import ContentProvider from "../components/Providers/ContentProvider";
import getContents from "../lib/getContents";

export const ServerProviders: React.FC<{
  children: React.ReactNode;
}> = async ({ children }) => {
  const contents = await getContents();
  return <ContentProvider contents={contents}>{children}</ContentProvider>;
};
