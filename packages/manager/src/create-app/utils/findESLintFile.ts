import { ESLintFileType } from '@create-app/constants/templates';
import { findFilesFromDirectory } from './findFilesFromDirectory';

export const findESLintFile = (appPath: string) => {
  const [esLintFilePath] = findFilesFromDirectory(appPath, '.eslintrc');

  if (!esLintFilePath) throw new Error('Not found ESLint rc file.');

  let type: ESLintFileType = 'none';
  if (esLintFilePath.match(/^.+\.js$/)) {
    type = 'js';
  } else if (esLintFilePath.match(/^.+\.json$/)) {
    type = 'json';
  }

  return {
    path: esLintFilePath,
    type,
  };
};
