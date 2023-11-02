/**
 * 배포환경 타입
 * @description `production`: 실서버, `development`: 개발서버 및 로컬
 */
export type ReleaseEnvType = "production" | "development";

/**
 * @description 배포 환경명
 * @type {"production" | "development"}
 */
export const RELEASE_ENV = process.env.RELEASE_ENV as ReleaseEnvType;

/**
 * @description 실서버 배포환경 여부
 * @type {boolean}
 */
export const IS_PRODUCTION = RELEASE_ENV === "production";

/**
 * @description 개발서버 배포환경 여부
 * @type {boolean}
 */
export const IS_DEVELOPMENT = RELEASE_ENV === "development";
