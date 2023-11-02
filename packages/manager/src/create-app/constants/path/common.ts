import path from "path";
import {
  PATH_DIR_MONOREPO_ROOT,
  PATH_DIR_PACKAGES,
} from "@fe-monorepo/core";

/**
 * fe-monorepo 모노레포의 packages 하위 manager 모듈 폴더 경로
 */
export const PATH_DIR_MONOREPO_MANAGER = path.join(
  PATH_DIR_PACKAGES,
  "manager"
);

/**
 * fe-monorepo 모노레포의 packages 하위 manager 모듈의 templates 상수 폴더 경로
 */
export const PATH_DIR_CONST_TEMPLATES = path.join(
  PATH_DIR_MONOREPO_MANAGER,
  "src",
  "create-app",
  "constants",
  "templates"
);

/**
 * fe-monorepo 모노레포의 Root package.json 파일 경로
 */
export const PATH_FILE_MONOREPO_ROOT_PACKAGES_JSON = path.join(
  PATH_DIR_MONOREPO_ROOT,
  "package.json"
);
