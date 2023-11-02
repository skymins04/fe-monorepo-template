import path from "path";

/**
 * fe-monorepo 모노레포의 Root 폴더 경로
 */
export const PATH_DIR_MONOREPO_ROOT = path.join(
  __dirname,
  "..",
  "..",
  "..",
  ".."
);

/**
 * fe-monorepo 모노레포의 apps 폴더 경로
 */
export const PATH_DIR_APPS = path.join(PATH_DIR_MONOREPO_ROOT, "apps");

/**
 * fe-monorepo 모노레포의 packages 폴더 경로
 */
export const PATH_DIR_PACKAGES = path.join(PATH_DIR_MONOREPO_ROOT, "packages");
