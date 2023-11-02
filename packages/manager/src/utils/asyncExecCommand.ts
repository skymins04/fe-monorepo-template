import { spawn } from 'child_process';

export const asyncExecCommand = async (command: string) => {
  return new Promise<void>((res, rej) => {
    const process = spawn(command, {
      shell: true,
      stdio: 'inherit',
    });
    process.addListener('exit', () => {
      res();
    });
    process.addListener('error', (err) => {
      rej(err);
    });
  });
};
