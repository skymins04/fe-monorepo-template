import { chdir } from "process";
import { PATH_DIR_MONOREPO_ROOT } from "@fe-monorepo/core";
import { asyncExecCommand } from "@/utils";

export const installPackagesAtMonorepoRoot = async () => {
  chdir(PATH_DIR_MONOREPO_ROOT);
  await asyncExecCommand("pnpm install");
};
