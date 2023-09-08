import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-blue": "#0079FF",
        "black-logo": "222731",
        "light-gray": "#F6F8FF",
        "light-text": "#4B6A9B",
        "light-mode-number": "#2B3442",
        "dark-mode-bg": "#1E2A47",
        "really-dark-bg": "#141D2F",
      },
    },
  },
  plugins: [],
};
export default config;
