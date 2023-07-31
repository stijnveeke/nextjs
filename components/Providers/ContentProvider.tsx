"use client";
import React, { createContext } from "react";

export const ContentContext = createContext<{
  getContent: (contentUrl: string) => string;
}>({
  getContent: (contentUrl: string) => "",
});

export const ContentProvider: React.FC<{
  children: React.ReactNode;
  contents: Array<{
    contentFile: string;
    content: any;
  }>;
}> = ({ children, contents }) => {
  const getContent = (contentUrl: string) => {
    const content = contents.find(
      (c) => c.contentFile === contentUrl.split("/")[1]
    );

    if (content) {
      return content.content;
    }
    return "";
  };
  return (
    <ContentContext.Provider value={{ getContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider;
