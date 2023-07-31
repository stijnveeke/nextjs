import React from "react";
import path from "path";
import { promises as fs } from "fs";

export default async function getNavbar(): Promise<INavbar> {
  const jsonDirectory = path.join(process.cwd(), "json");

  const fileContents = await fs.readFile(
    jsonDirectory + "/navbar.json",
    "utf8"
  );

  return JSON.parse(fileContents);
}
