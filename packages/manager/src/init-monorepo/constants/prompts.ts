import { PromptObject } from "prompts";

export const INIT_MONOREPO_OPTIONS: PromptObject<string>[] = [
  {
    type: "text",
    name: "monorepoRootName",
    message: "monorepo root package.json name",
  },
];

export type InitMonorepoOptionAnswers = {
  monorepoRootName: string;
};
