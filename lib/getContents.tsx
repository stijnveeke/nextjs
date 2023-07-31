import React from "react";
import path from "path";
import { promises as fs } from "fs";

export default async function getContents(): Promise<
  Array<{
    contentFile: string;
    content: any;
  }>
> {
  const contentFiles = await fs.readdir(path.join(process.cwd(), "contents"));

  const contents = Promise.all(
    contentFiles.map(async (contentFile) => {
      const contentUrl = path.join(process.cwd(), "contents", contentFile);
      const content = await fs.readFile(contentUrl, "utf8");
      return { contentFile, content };
    })
  );

  return await contents;
}
