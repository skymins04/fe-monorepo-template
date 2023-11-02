import path from "path";
import fs from "fs";

export const findAllPaths = (rootPath: string, findKeyword: string) => {
  const result: string[] = [];

  const _findAllPaths = (rootPath: string, findKeyword: string) => {
    const targetPath = path.join(rootPath, findKeyword);
    if (fs.existsSync(targetPath)) {
      result.push(targetPath);
    }

    const currentPosFileDirs = fs.readdirSync(rootPath);
    currentPosFileDirs.forEach((item) => {
      const itemPath = path.join(rootPath, item);
      if (fs.statSync(itemPath).isDirectory() && item !== findKeyword) {
        _findAllPaths(itemPath, findKeyword);
      }
    });
  };

  _findAllPaths(rootPath, findKeyword);

  return result;
};
