export const TEMPLATE_TAILWIND_NEXTJS = {
  plugins: ["@tailwindcss/typography", "@tailwindcss/forms"],
  presets: ["@fe-monorepo/tailwind"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/src/**/*.{js,jsx,ts,tsx}",
  ],
};
