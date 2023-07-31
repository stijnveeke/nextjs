/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#fff",
        primary: "var(--color-primary)",
        primaryHover: "var(--color-primaryHover)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        bg: "var(--color-bg)",
      },
    },
  },
  plugins: [],
};
