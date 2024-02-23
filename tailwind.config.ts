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
        primary: "#DFFF00",
        secondary: "",
        pri_text: "#DFDFDF",
        sec_text: "#ACACAC",
        border: "#565656",
      },
    },
  },
  plugins: [],
};
export default config;
