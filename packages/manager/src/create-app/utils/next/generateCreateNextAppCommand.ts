import { CreateNextAppOptionAnswers } from "@create-app/constants";

export const generateCreateNextAppCommand = ({
  nextVersion,
}: CreateNextAppOptionAnswers) => {
  const command = `pnpm dlx create-next-app@${nextVersion}`;

  return command;
};
