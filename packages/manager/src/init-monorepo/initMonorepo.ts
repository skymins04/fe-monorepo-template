import { exit } from "process";
import handleCliError from "handle-cli-error";
import { getPromptAnswersInitMonorepo } from "@init-monorepo/utils";
import {
  parseJSONFromFile,
  removePackageLockFile,
  replaceStringAllFiles,
  waitLoading,
} from "@/utils";
import { PATH_DIR_MONOREPO_ROOT } from "@fe-monorepo/core";
import { PATH_FILE_MONOREPO_ROOT_PACKAGES_JSON } from "@create-app/constants";
import { removeNodeModules } from "@remove-node-modules/removeNodeModules";
import { installPackagesAtMonorepoRoot } from "@/utils/installPackagesAtMonorepoRoot";

const initMonorepo = async () => {
  const answers = await getPromptAnswersInitMonorepo();

  try {
    const monorepoRootMonorepoJSON = parseJSONFromFile(
      PATH_FILE_MONOREPO_ROOT_PACKAGES_JSON
    );
    const monorepoName = monorepoRootMonorepoJSON.name;
    if (typeof monorepoName !== "string") {
      throw new Error("Not found monorepo name.");
    }
    if (
      typeof answers.monorepoRootName !== "string" ||
      answers.monorepoRootName.trim() === ""
    ) {
      throw new Error("Not allowed monorepo name.");
    }

    await waitLoading("Change monorepo root name...", async () => {
      replaceStringAllFiles(
        PATH_DIR_MONOREPO_ROOT,
        monorepoName,
        answers.monorepoRootName,
        /(node\_modules|(.*\-lock\.yaml))/g
      );
    });
    await waitLoading("Remove node modules...", async () => {
      removeNodeModules();
    });
    await waitLoading("Remove lock file...", async () => {
      removePackageLockFile(PATH_DIR_MONOREPO_ROOT, "pnpm");
    });
    await waitLoading("Reinstall monorepo packages...", async () => {
      installPackagesAtMonorepoRoot();
    });
  } catch (e) {
    handleCliError(e);
    exit(1);
  }
};

initMonorepo();
