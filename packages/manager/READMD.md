# fe-monorepo manager package

`manager`는 fe-monorepo를 관리하기 위한 스크립트들을 모아놓은 패키지입니다.  
모노레포 루트 경로에서 `pnpm {명령어}`의 형태로 사용할 수 있는 모노레포 관리 기능을 제공합니다.

## 1. create:next

모노레포 **apps/** 폴더 내에 새로운 **Next.js 앱을 생성**합니다.  
새로 생성된 Next.js 앱에 공통적으로 필요한 내부 의존성과 외부 의존성을 자동으로 설치하고,  
Configuration 파일들(.eslintrc, tailwind.config.js 등등)을 자동으로 설정해줍니다.

```sh
# 모노레포 루트 경로에서 실행
pnpm create:next
```

이 명령어를 실행하면 다음과 같은 과정을 거쳐 새로운 Next.js 앱을 생성합니다.

1. 생성할 Next.js 앱의 버전 입력 (기본값: latest, 형식: latest 또는 1.x.x 와 같이 npm 패키지 버전을 명시)
2. 입력 받은 버전의 create-next-app 실행 (create-next-app에서 제공하는 설치 프롬프트 값 입력 필요)
3. 새로 생성된 Next.js 앱에 내부/외부 공통 의존성 설치
   1. 내부 공통 의존성 목록
      1. [DEPENDENCIES_MONOREPO_NEXTJS](./src/create-app/constants/dependancies/next.ts)
      2. [DEPENDENCIES_MONOREPO_DEV_NEXTJS](./src/create-app/constants/dependancies/next.ts)
   2. 외부 공통 의존성 목록
      1. [DEPENDENCIES_NEXTJS](./src/create-app/constants/dependancies/next.ts)
      2. [DEPENDENCIES_DEV_NEXTJS](./src/create-app/constants/dependancies/next.ts)
4. 새로 생성된 Next.js 앱에 Configuration 파일들을 자동 설정
   1. package.json
      1. name 프로퍼티 값을 "@fe-monorepo/{앱 이름}" 형식으로 변경
      2. sideEffects 프로퍼티에 `false` 값 삽입
   2. .eslintrc
      1. [.eslintrc 템플릿](./src/create-app/constants/templates/eslint/next.ts)에 맞춰 수정
   3. postcss.config.js
      1. [postcss.config.js 템플릿](./src/create-app/constants/templates/postcss/next.ts)에 맞춰 수정
   4. tsconfig.json
      1. [tsconfig.json 템플릿](./src/create-app/constants/templates/tsconfig/next.ts)에 맞춰 수정
   5. tailwind.config.js
      1. [tailwind.config.js 템플릿](./src/create-app/constants/templates/tailwind/next.ts)에 맞춰 수정
   6. next.config.js
      1. [next.config.js 템플릿](./src/create-app/constants/templates/nextConfig/config)에 맞춰 수정

### 1-1. 자동 설치될 내부/외부 공통 의존성 패키지 수정/추가 방법

**create:next** 명령어는 새로 생성한 Next.js 앱에 자동으로 공통 내부/외부 의존성 패키지를 설치해줍니다.  
자동으로 설치될 의존성 패키지의 목록은 [create-app/constants/dependancies/next.ts](./src/create-app/constants/dependancies/next.ts) 파일에서 수정할 수 있습니다.

`DEPENDENCIES_MONOREPO_`로 시작하는 배열 상수에 패키지명을 추가하면,  
새로 생성된 Next.js 앱의 `next.config.js`에 transpile target으로 자동 추가해줍니다.

```ts
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

```
