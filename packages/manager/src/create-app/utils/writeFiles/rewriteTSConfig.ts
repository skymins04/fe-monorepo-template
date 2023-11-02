import path from 'path';
import fs from 'fs';

export const rewriteTSConfig = (appPath: string, tsconfigContents: any) => {
  const appTSconfigPath = path.join(appPath, 'tsconfig.json');
  const appSrcDir = path.join(appPath, 'src');

  if (!tsconfigContents.compilerOptions) {
    tsconfigContents.compilerOptions = {};
  }
  if (!tsconfigContents.compilerOptions.paths) {
    tsconfigContents.compilerOptions = {
      ...tsconfigContents.compilerOptions,
      baseUrl: '.',
      paths: {},
    };
  }

  const isExistSrcDir = fs.existsSync(appSrcDir);
  const aliasRootPath = isExistSrcDir ? 'src/*' : './*';
  tsconfigContents.compilerOptions.paths['@/*'] = [aliasRootPath];

  const tsconfigContentsRawString = JSON.stringify(
    tsconfigContents,
    undefined,
    2,
  );
  fs.writeFileSync(appTSconfigPath, tsconfigContentsRawString);
};
