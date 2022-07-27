/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: (theme) => ({
        silhouette: "url('/src/assets/silhouette.png')",
      }),
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
      grayscale: ["hover", "focus"],
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
