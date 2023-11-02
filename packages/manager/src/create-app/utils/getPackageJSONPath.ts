import path from 'path';

export const getPackageJSONPath = (appPath: string) => {
  return path.join(appPath, 'package.json');
};
