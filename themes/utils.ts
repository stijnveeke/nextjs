import { getColors } from "../lib/Colors";

// src/themes/utils.js
export async function applyTheme(theme) {
  const colors = await getColors();
  const root = document.documentElement;
  Object.keys(theme).forEach((cssVar) => {
    root.style.setProperty(cssVar, theme[cssVar]);
  });
}
