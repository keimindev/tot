const {nextui} = require("@nextui-org/react");
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config}*/

module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      primary: colors.indigo,
  },
  },
  plugins: [
    nextui(),
],
  darkMode: "class",
}

