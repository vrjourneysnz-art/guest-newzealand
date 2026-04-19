import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: "#789653",
        "sage-dark": "#587235",
        "sage-light": "#F5F8EE",
        "sage-mid": "#E3E8D7",
        gold: "#D6910F",
        "gold-dark": "#C1820C",
        rust: "#B55217",
        dark: "#343434",
        body: "#555555",
        border: "#ABB0B2",
      },
      fontFamily: {
        sans: ["Open Sans", "Helvetica Neue", "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
