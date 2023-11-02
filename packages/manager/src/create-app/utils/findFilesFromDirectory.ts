import fs from 'fs';
import path from 'path';

export const findFilesFromDirectory = (
  targetDirPath: string,
  keyword: string,
) => {
  const files = fs.readdirSync(targetDirPath);
  const searchingFileRegex = new RegExp(keyword, 'g');
  return files
    .filter((file) => file.match(searchingFileRegex))
    .map((file) => path.join(targetDirPath, file));
};
