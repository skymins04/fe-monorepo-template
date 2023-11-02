import { chdir } from "process";
import { asyncExecCommand } from "@/utils";

type AddDependencyToAppOptions = {
  dependencies: string[];
  devDependencies: string[];
};

export const installDependencyToApp = async (
  appPath: string,
  { dependencies, devDependencies }: AddDependencyToAppOptions
) => {
  const commands: string[] = [];
  const isEmptyDependency = dependencies.length === 0;
  const isEmptyDevDependency = devDependencies.length === 0;
  const isEmptyCommand = isEmptyDependency && isEmptyDevDependency;

  if (isEmptyCommand) return;

  if (!isEmptyDependency) {
    commands.push(["pnpm add", ...dependencies].join(" "));
  }
  if (!isEmptyDevDependency) {
    commands.push(["pnpm add -D", ...devDependencies].join(" "));
  }

  const command = commands.join(" && ");

  chdir(appPath);
  await asyncExecCommand(command);
};
