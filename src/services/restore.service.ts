import type { AppConfig } from "../config/types.js";
import { restorePostgresBackup } from "../database/restore.js";

export async function runRestore(
  config: AppConfig,
  backupFile: string,
): Promise<void> {
  if (config.database.type !== "postgres") {
    throw new Error("Only PostgreSQL restore is supported");
  }

  await restorePostgresBackup(config.database, backupFile);

  console.log(`Restore completed: ${backupFile}`);
}
