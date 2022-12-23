const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Unbounded", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        menu: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        "menu-reverse": {
          "0%": { transform: "scaleX(1)" },
          "100%": { transform: "scaleX(0)" },
        },
      },
      animation: {
        open: "menu 0.3s ease-in-out forwards",
        "open-reverse": "menu-reverse 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
