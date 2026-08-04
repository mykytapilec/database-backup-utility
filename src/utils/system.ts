import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export async function checkCommand(command: string): Promise<void> {
  try {
    await execFileAsync(command, ["--version"]);
  } catch {
    throw new Error(`${command} is not installed`);
  }
}
