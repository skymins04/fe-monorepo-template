export const TEMPLATE_TSCONFIG_NEXTJS = {
  $schema: "https://json.schemastore.org/tsconfig",
  extends: "@fe-monorepo/tsconfig/nextjs.json",
  compilerOptions: {
    baseUrl: ".",
    paths: {},
  },
  include: ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  exclude: ["node_modules"],
};
