import { parseJSONFromFile, writeJSONFileSync } from "@/utils";
import { getPackageJSONPath } from "../getPackageJSONPath";

export const disableWebpackSideEffectsOfApp = (appPath: string) => {
  const appPackageJSONPath = getPackageJSONPath(appPath);
  const appPackageJSON = parseJSONFromFile(appPackageJSONPath);

  appPackageJSON.sideEffects = false;

  writeJSONFileSync(appPackageJSONPath, appPackageJSON);
};
