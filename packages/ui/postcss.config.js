export default {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {},
    "postcss-preset-env": {
      browsers: ["chrome >= 50", "last 2 versions"],
    },
  },
};
