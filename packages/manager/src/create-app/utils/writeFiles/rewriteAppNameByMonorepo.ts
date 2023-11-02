import { PATH_FILE_MONOREPO_ROOT_PACKAGES_JSON } from "@create-app/constants";
import { parseJSONFromFile, writeJSONFileSync } from "@/utils";
import { getPackageJSONPath } from "../getPackageJSONPath";

export const rewriteAppNameByMonorepo = (appPath: string) => {
  const monorepoPackageJSON = parseJSONFromFile(
    PATH_FILE_MONOREPO_ROOT_PACKAGES_JSON
  );
  const appPackageJSONPath = getPackageJSONPath(appPath);
  const appPackageJSON = parseJSONFromFile(appPackageJSONPath);

  const groupName = monorepoPackageJSON.name
    ? `@${monorepoPackageJSON.name.replace(/\@/g, "").split("/")[0]}/`
    : "";
  const newAppName = `${groupName}${appPackageJSON.name}`;

  appPackageJSON.name = newAppName;

  writeJSONFileSync(appPackageJSONPath, appPackageJSON);
};
