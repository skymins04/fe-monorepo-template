/** @type {import('tailwindcss').Config} */
export default {
  plugins: ["@tailwindcss/typography", "@tailwindcss/forms"],
  presets: ["@fe-monorepo/tailwind"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
    "index.html",
  ],
};
