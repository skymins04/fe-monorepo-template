/**
 * 새로 생성될 Next.js 앱에 자동설치될 공통 내부/외부 의존성 패키지를 정의하는 상수 파일.
 */

/**
 * fe-monorepo 모노레포 내부(packages 폴더 아래의 모듈)의 공통 의존성 패키지 목록
 * @description 특정 버전을 명시해야할 경우 `패키지명@1.x.x`와 같은 형태로 작성하세요.
 */
export const DEPENDENCIES_MONOREPO_NEXTJS: string[] = [
  "@fe-monorepo/core",
  "@fe-monorepo/hooks",
  "@fe-monorepo/utils",
  "@fe-monorepo/ui",
];

/**
 * fe-monorepo 모노레포 내부(packages 폴더 아래의 모듈)의 공통 개발 의존성 패키지 목록
 * @description 특정 버전을 명시해야할 경우 `패키지명@1.x.x`와 같은 형태로 작성하세요.
 */
export const DEPENDENCIES_MONOREPO_DEV_NEXTJS: string[] = [
  "@fe-monorepo/tsconfig",
  "@fe-monorepo/tailwind",
  "eslint-config-fe-monorepo",
];

/**
 * fe-monorepo 모노레포 외부의 공통 의존성 패키지 목록
 * @description 특정 버전을 명시해야할 경우 `패키지명@1.x.x`와 같은 형태로 작성하세요.
 */
export const DEPENDENCIES_NEXTJS: string[] = [
  ...DEPENDENCIES_MONOREPO_NEXTJS,
  "classnames",
  "js-cookie",
  "swr",
  "zod",
  "react-hook-form",
  "@hookform/resolvers",
  "dayjs",
  "preact",
];

/**
 * fe-monorepo 모노레포 외부의 공통 개발 의존성 패키지 목록
 * @description 특정 버전을 명시해야할 경우 `패키지명@1.x.x`와 같은 형태로 작성하세요.
 */
export const DEPENDENCIES_DEV_NEXTJS: string[] = [
  ...DEPENDENCIES_MONOREPO_DEV_NEXTJS,
  "prettier",
  "@typescript-eslint/eslint-plugin",
  "@typescript-eslint/parser",
  "eslint-config-next",
  "eslint-config-prettier",
  "eslint-plugin-jest",
  "eslint-plugin-prettier",
  "eslint-plugin-unused-imports",
  "eslint-plugin-react-refresh",
  "@tailwindcss/forms",
  "@tailwindcss/typography",
  "@types/js-cookie",
  "postcss-import",
  "postcss-preset-env",
  "webpack",
  "@next/bundle-analyzer",
];
