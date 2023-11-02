import fs from "fs";
import path from "path";

export type PackageManager = "npm" | "pnpm" | "yarn";

const packageManagerLockFileName: Record<PackageManager, string> = {
  npm: "package-lock.json",
  yarn: "yarn.lock",
  pnpm: "pnpm-lock.yaml",
};

export const removePackageLockFile = (
  rootPath: string,
  packageManager: PackageManager
) => {
  const lockFileName = packageManagerLockFileName[packageManager];
  const lockFilePath = path.join(rootPath, lockFileName);

  if (fs.existsSync(lockFilePath)) {
    fs.rmSync(lockFilePath);
  }
};
