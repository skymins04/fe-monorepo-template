import fs from "fs";
import path from "path";
import { parseJSONFromFile, writeJSONFileSync } from "@/utils";
import { PATH_DIR_MONOREPO_ROOT } from "@fe-monorepo/core";
import { getAppNameFromPath } from "./getAppNameFromPath";

export const addLocalSSLProxyConfig = (
  appPath: string,
  source: number,
  target: number
) => {
  const appName = getAppNameFromPath(appPath);
  const proxyConfigName = `${appName}-proxy`;
  const localSSLProxyConfigJSONPath = path.join(
    PATH_DIR_MONOREPO_ROOT,
    "local-ssl-proxy.json"
  );

  const isExistFile = fs.existsSync(localSSLProxyConfigJSONPath);
  const localSSLProxyConfigJSON = isExistFile
    ? parseJSONFromFile(localSSLProxyConfigJSONPath)
    : {};

  const localSSLProxyConfigEntries = Object.entries<any>(
    localSSLProxyConfigJSON
  );
  const isExistProxyConfig =
    localSSLProxyConfigEntries.filter(([name, config]) => {
      return (
        name === proxyConfigName ||
        config["source"] === source ||
        config["target"] === target
      );
    }).length !== 0;

  if (isExistProxyConfig) {
    throw new Error(
      `${proxyConfigName} is already added config (source: ${source}, target: ${target})`
    );
  }

  localSSLProxyConfigJSON[proxyConfigName] = {
    source,
    target,
  };

  writeJSONFileSync(localSSLProxyConfigJSONPath, localSSLProxyConfigJSON);
};
