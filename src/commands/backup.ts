import { loadConfig } from "../config/index.js";
import { runBackup } from "../services/backup.service.js";

export async function backupCommand(): Promise<void> {
  const config = loadConfig();

  await runBackup(config);
}
