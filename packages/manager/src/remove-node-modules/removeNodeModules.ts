import fs from "fs";
import { PATH_DIR_MONOREPO_ROOT } from "@fe-monorepo/core";
import { findAllPaths } from "@/utils";

const statAsync = async (path: string) =>
  new Promise<fs.Stats>((res, rej) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        rej(err);
      } else {
        res(stats);
      }
    });
  });

const removeDirAsync = async (path: string) =>
  new Promise<void>(async (res, rej) => {
    const isDir = await statAsync(path).then((stat) => stat.isDirectory());
    if (!isDir) {
      rej(new Error(`"${path}" is not directory.`));
    } else {
      fs.rm(path, { recursive: true, force: true }, (err) => {
        if (err) {
          rej(err);
        } else {
          res();
        }
      });
    }
  });

export const removeNodeModules = async () => {
  const nodeModulesDirs = findAllPaths(PATH_DIR_MONOREPO_ROOT, "node_modules");
  await Promise.all(nodeModulesDirs.map((path) => removeDirAsync(path)));
};

removeNodeModules();
