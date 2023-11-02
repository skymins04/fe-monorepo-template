import prompts from "prompts";
import {
  INIT_MONOREPO_OPTIONS,
  InitMonorepoOptionAnswers,
} from "@init-monorepo/constants";

export const getPromptAnswersInitMonorepo = async () => {
  const answers = await prompts(INIT_MONOREPO_OPTIONS);
  return answers as InitMonorepoOptionAnswers;
};
