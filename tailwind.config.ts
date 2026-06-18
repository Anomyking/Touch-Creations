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
        brand: {
          950: "#221E1F",
          900: "#221E1F",
          800: "#C3A029",
          700: "#C3A029",
          600: "#FDFDFD",
          500: "#FDFDFD",
          400: "#221E1F",
          300: "#221E1F",
          100: "#FDFDFD",
          50:  "#FDFDFD",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        brand:    "0 4px 24px rgba(34, 30, 31, 0.08)",
        "brand-lg": "0 8px 40px rgba(34, 30, 31, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;

