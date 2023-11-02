import path from "path";

export const getAppNameFromPath = (appPath: string) => {
  return path.basename(appPath);
};
