import { execFile } from "node:child_process";
import { promisify } from "node:util";

import type { DatabaseConfig } from "../config/types.js";

const execFileAsync = promisify(execFile);

export async function restorePostgresBackup(
  config: DatabaseConfig,
  backupFile: string,
): Promise<void> {
  await execFileAsync("psql", [
    "-h",
    config.host,
    "-p",
    String(config.port),
    "-U",
    config.username,
    "-d",
    config.database,
    "-f",
    backupFile,
  ]);
}
