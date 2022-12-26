const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Jetbrains Mono"', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        menu: {
          "0%": { transform: "scaleX(0)" },
          "50%": { transform: "scaleX(1.2)" },
          "100%": { transform: "scaleX(1)" },
        },
        "menu-reverse": {
          "0%": { transform: "scaleX(1)" },
          "50%": { transform: "scaleX(1.2)" },
          "100%": { transform: "scaleX(0)" },
        },
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      animation: {
        open: "menu 0.4s ease forwards",
        "open-reverse": "menu-reverse 0.4s ease forwards",
        text: "text 5s ease infinite",
      },
    },
  },
  plugins: [],
};
