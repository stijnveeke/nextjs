import React from "react";
import path from "path";
import { promises as fs } from "fs";

export default async function getSiteSections(): Promise<Array<ISiteSection>> {
  const jsonDirectory = path.join(process.cwd(), "json");

  const jsonContents = await fs.readFile(
    jsonDirectory + "/siteSections.json",
    "utf8"
  );

  const jContent = JSON.parse(jsonContents);

  return jContent;
}
