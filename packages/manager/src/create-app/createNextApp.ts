import { exit } from "process";
import path from "path";
import handleCliError from "handle-cli-error";
import {
  readFileByString,
  waitLoading,
  installPackagesAtMonorepoRoot,
} from "@/utils";
import {
  DEPENDENCIES_NEXTJS,
  DEPENDENCIES_DEV_NEXTJS,
  TEMPLATE_ESLINT_NEXTJS,
  TEMPLATE_POSTCSS_NEXTJS,
  TEMPLATE_TSCONFIG_NEXTJS,
  TEMPLATE_TAILWIND_NEXTJS,
  PATH_DIR_CONST_TEMPLATES,
} from "./constants";
import {
  getPromptAnswersCreateNextApp,
  installDependencyToApp,
  rewriteAppNameByMonorepo,
  disableWebpackSideEffectsOfApp,
  rewriteESLintrc,
  rewritePostCSS,
  rewriteTSConfig,
  rewriteTailwindConfig,
  excuteCreateNextApp,
  rewriteNextConfig,
  addLocalSSLProxyConfig,
  setupNextDevServer,
} from "./utils";

export const createNextApp = async () => {
  const answers = await getPromptAnswersCreateNextApp();

  try {
    const createdNextAppPath = await excuteCreateNextApp(answers);
    await waitLoading("Add proxy config for Next.js app...", async () => {
      addLocalSSLProxyConfig(
        createdNextAppPath,
        answers.localSSLProxySourcePort,
        answers.localSSLProxyTargetPort
      );
      setupNextDevServer(
        createdNextAppPath,
        answers.localSSLProxyTargetPort,
        answers.useTurbo
      );
    });
    await waitLoading("Install dependencies to Next.js app...", () =>
      installDependencyToApp(createdNextAppPath, {
        dependencies: DEPENDENCIES_NEXTJS,
        devDependencies: DEPENDENCIES_DEV_NEXTJS,
      })
    );
    await waitLoading("Install dependencies to Next.js app...", async () =>
      rewriteAppNameByMonorepo(createdNextAppPath)
    );
    await waitLoading(
      "Disable webpack side-effects of Next.js app...",
      async () => disableWebpackSideEffectsOfApp(createdNextAppPath)
    );
    await waitLoading(
      "Rewrite .eslintrc of Next.js app to use template...",
      async () => rewriteESLintrc(createdNextAppPath, TEMPLATE_ESLINT_NEXTJS)
    );
    await waitLoading(
      "Rewrite postcss.config.js of Next.js app to use template...",
      async () => rewritePostCSS(createdNextAppPath, TEMPLATE_POSTCSS_NEXTJS)
    );
    await waitLoading(
      "Rewrite tsconfig.json of Next.js app to use template...",
      async () => rewriteTSConfig(createdNextAppPath, TEMPLATE_TSCONFIG_NEXTJS)
    );
    await waitLoading(
      "Rewrite tailwind.config.js of Next.js app to use template...",
      async () =>
        rewriteTailwindConfig(createdNextAppPath, TEMPLATE_TAILWIND_NEXTJS)
    );
    await waitLoading(
      "Rewrite next.config.js of Next.js app to use template...",
      async () => {
        const nextConfigTemplatePath = path.join(
          PATH_DIR_CONST_TEMPLATES,
          "nextConfig",
          "config"
        );
        const TEMPLATE_NEXTCONFIG_NEXTJS = readFileByString(
          nextConfigTemplatePath
        );
        rewriteNextConfig(createdNextAppPath, TEMPLATE_NEXTCONFIG_NEXTJS);
      }
    );
    await waitLoading(
      "Install monorepo packages...",
      installPackagesAtMonorepoRoot
    );
  } catch (e) {
    handleCliError(e);
    exit(1);
  }
};

createNextApp();
