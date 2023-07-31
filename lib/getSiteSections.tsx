import React from "react";
import path from "path";
import { promises as fs } from "fs";

export default async function getSiteSections(): Promise<Array<ISiteSection>> {
  const jsonDirectory = path.join(process.cwd(), "json");

  const jsonContents = await fs.readFile(
    jsonDirectory + "/siteSections.json",
    "utf8"
  );

  const contentsDir = path.join(process.cwd(), "contents");

  const getWithContent = async (sections: Array<any>) => {
    const promises = Promise.all(
      sections.map(async (section) => {
        if (section.contentUrl === undefined) return { ...section };
        const content = await fs.readFile(section.contentUrl, "utf8");
        return { ...section, content: content ?? section.content ?? "" };
      })
    );

    return await promises;
  };

  const jContent = JSON.parse(jsonContents);

  return await getWithContent(jContent);
}
