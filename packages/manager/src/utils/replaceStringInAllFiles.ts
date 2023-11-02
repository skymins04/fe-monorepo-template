import path from "path";
import fs from "fs";

export const replaceStringAllFiles = (
  rootPath: string,
  targetString: string,
  relapcedString: string,
  ignorePattern?: RegExp
) => {
  const targetStringRegex = new RegExp(targetString, "g");
  const ErrorNotDirectory = (path: string) =>
    new Error(`rootPath is not directory: ${path}`);
  const changedFilePaths: string[] = [];

  if (!fs.statSync(rootPath).isDirectory()) {
    throw ErrorNotDirectory(rootPath);
  }

  const _findAllPaths = (
    rootPath: string,
    targetStringRegex: RegExp,
    relapcedString: string,
    ignorePattern?: RegExp
  ) => {
    const currentPosFileDirs = fs.readdirSync(rootPath);
    currentPosFileDirs.forEach((item) => {
      const itemPath = path.join(rootPath, item);

      if (ignorePattern && ignorePattern.test(item)) return;

      if (fs.statSync(itemPath).isDirectory()) {
        _findAllPaths(
          itemPath,
          targetStringRegex,
          relapcedString,
          ignorePattern
        );
      } else {
        const fileContents = fs.readFileSync(itemPath).toString();
        if (fileContents.match(targetStringRegex)) {
          fs.writeFileSync(
            itemPath,
            fileContents.replace(targetStringRegex, relapcedString)
          );
          changedFilePaths.push(itemPath);
        }
      }
    });
  };

  _findAllPaths(rootPath, targetStringRegex, relapcedString, ignorePattern);

  console.log("replaced string", changedFilePaths);
};
