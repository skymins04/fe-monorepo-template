module.exports = {
  extends: ["plugin:@typescript-eslint/eslint-recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["unused-imports"],
  ignorePatterns: [
    "node_modules",
    "dist",
    ".eslintrc.cjs",
    ".eslintrc.js",
    ".eslintrc.json",
    ".eslintrc",
  ],
  rules: {
    "no-console": ["error", { allow: ["debug", "warn", "error"] }],
    "unused-imports/no-unused-imports": "error",
  },
};
