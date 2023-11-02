import fs from "fs";
import { getPackageJSONPath } from "../getPackageJSONPath";
import { parseJSONFromFile, writeJSONFileSync } from "@/utils";

export const setupNextDevServer = (
  appPath: string,
  targetPort: number,
  useTurbo = false
) => {
  const appPackageJSONPath = getPackageJSONPath(appPath);
  const isExistJSON = fs.existsSync(appPackageJSONPath);

  if (!isExistJSON) {
    throw new Error(`Not found package.json (${appPackageJSONPath})`);
  }
  const appPackageJSON = parseJSONFromFile(appPackageJSONPath);

  const devServerCommands = ["next", "dev", "-p", targetPort];
  if (useTurbo) {
    devServerCommands.push("--turbo");
  }
  const devServerCommand = devServerCommands.join(" ");
  appPackageJSON.scripts.dev = devServerCommand;

  writeJSONFileSync(appPackageJSONPath, appPackageJSON);
};
