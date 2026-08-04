import { loadConfig } from "../config/index.js";
import { runRestore } from "../services/restore.service.js";

export async function restoreCommand(backupFile?: string): Promise<void> {
  if (!backupFile) {
    throw new Error("Backup file path is required");
  }

  const config = loadConfig();

  await runRestore(config, backupFile);
}
