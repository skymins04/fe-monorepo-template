import path from "path";
import fs from "fs";
import { chdir } from "process";
import { PATH_DIR_APPS } from "@fe-monorepo/core";
import { asyncExecCommand } from "@/utils";
import { CreateNextAppOptionAnswers } from "@create-app/constants";
import { generateCreateNextAppCommand } from "./generateCreateNextAppCommand";

export type ExcuteCreateNextAppOptions = {};

export const excuteCreateNextApp = async (
  options: CreateNextAppOptionAnswers
) => {
  const command = generateCreateNextAppCommand(options);
  const existingApps = fs.readdirSync(PATH_DIR_APPS);

  chdir(PATH_DIR_APPS);
  await asyncExecCommand(command);

  const newApp = fs
    .readdirSync(PATH_DIR_APPS)
    .filter((app) => !existingApps.includes(app))[0];

  if (!newApp) {
    throw new Error("Not found new Next.js app");
  }

  const newNextAppPath = path.join(PATH_DIR_APPS, newApp);
  return newNextAppPath;
};
