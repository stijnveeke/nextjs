import React from "react";
import path from "path";
import { promises as fs } from "fs";

export async function getColors(): Promise<IColor[]> {
  const jsonDirectory = path.join(process.cwd(), "json");

  const fileContents = await fs.readFile(
    jsonDirectory + "/colors.json",
    "utf8"
  );

  return JSON.parse(fileContents);
}

export async function getColorCode(colorName: string): Promise<IColor[]> {
  const jsonDirectory = path.join(process.cwd(), "json");

  const fileContents = await fs.readFile(
    jsonDirectory + "/colors.json",
    "utf8"
  );

  const color = JSON.parse(fileContents).filter(
    (color: IColor) => color.colorName === colorName
  );

  return color.length === 0 ? undefined : color[0].colorCode;
}
