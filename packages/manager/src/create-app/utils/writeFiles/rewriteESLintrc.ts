import fs from 'fs';
import { findESLintFile } from '../findESLintFile';

export const rewriteESLintrc = (appPath: string, eslintContents: any) => {
  const { path, type } = findESLintFile(appPath);
  const eslintRawString = JSON.stringify(eslintContents, undefined, 2);
  const eslintJSRawString = `module.exports = ${eslintRawString};`;

  fs.writeFileSync(path, type === 'js' ? eslintJSRawString : eslintRawString);
};
