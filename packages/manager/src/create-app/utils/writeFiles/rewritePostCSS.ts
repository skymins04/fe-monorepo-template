import fs from 'fs';
import path from 'path';

export const rewritePostCSS = (appPath: string, postcssContents: any) => {
  const appPostCSSPath = path.join(appPath, 'postcss.config.js');
  const postCSSContentsRawString = `module.exports = ${JSON.stringify(
    postcssContents,
    undefined,
    2,
  )};`;
  fs.writeFileSync(appPostCSSPath, postCSSContentsRawString);
};
