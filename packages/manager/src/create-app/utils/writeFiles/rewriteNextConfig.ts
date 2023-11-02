import {
  DEPENDENCIES_MONOREPO_DEV_NEXTJS,
  DEPENDENCIES_MONOREPO_NEXTJS,
} from '@create-app/constants';
import path from 'path';
import fs from 'fs';

export const rewriteNextConfig = (
  appPath: string,
  nextConfigContents: string,
) => {
  const appNextConfigPath = path.join(appPath, 'next.config.js');

  const transpilingTargets = [
    ...DEPENDENCIES_MONOREPO_NEXTJS,
    ...DEPENDENCIES_MONOREPO_DEV_NEXTJS,
  ];
  const stringifiedTranspilingTargets = transpilingTargets
    .map((target) => `'${target}'`)
    .join(', ');

  nextConfigContents = nextConfigContents.replace(
    '/*{ transpilePackages }*/',
    stringifiedTranspilingTargets,
  );

  fs.writeFileSync(appNextConfigPath, nextConfigContents);
};
