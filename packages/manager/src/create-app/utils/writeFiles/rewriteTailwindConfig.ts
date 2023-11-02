import fs from 'fs';
import path from 'path';

export const rewriteTailwindConfig = (
  appPath: string,
  tailwindConfigContents: any,
) => {
  const tailwindConfigTSPath = path.join(appPath, 'tailwind.config.ts');
  const tailwindConfigPath = path.join(appPath, 'tailwind.config.js');

  if (Array.isArray(tailwindConfigContents.plugins)) {
    tailwindConfigContents.plugins = tailwindConfigContents.plugins.map(
      (itm: string) => `require('${itm}')`,
    );
  }
  if (Array.isArray(tailwindConfigContents.presets)) {
    tailwindConfigContents.presets = tailwindConfigContents.presets.map(
      (itm: string) => `require('${itm}')`,
    );
  }

  const tailwindConfigRawString = `/** @type {import('tailwindcss').Config} */
  module.exports = ${JSON.stringify(tailwindConfigContents, undefined, 2)};`;
  const filteredTailwindConfigRawString = tailwindConfigRawString
    .replace(/\"(?=require)/g, '')
    .replace(/(?<=\'\))\"/g, '');

  if (fs.existsSync(tailwindConfigTSPath)) {
    fs.rmSync(tailwindConfigTSPath);
  }

  fs.writeFileSync(tailwindConfigPath, filteredTailwindConfigRawString);
};
