import fs from 'fs';

export const readFileByString = (path: string) =>
  fs.readFileSync(path).toString();
