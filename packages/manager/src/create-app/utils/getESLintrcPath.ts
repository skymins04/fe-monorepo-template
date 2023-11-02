import { ESLintFileType } from '@create-app/constants/templates';
import path from 'path';

const ESLintFileName: Record<ESLintFileType, string> = {
  js: '.eslintrc.js',
  json: '.eslintrc.json',
  none: '.eslintrc',
};

export const getESLintrcPath = (
  appPath: string,
  type: 'json' | 'js' | 'none' = 'json',
) => {
  return path.join(appPath, ESLintFileName[type]);
};
