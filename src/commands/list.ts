import { loadConfig } from "../config/index.js";
import { listBackups } from "../services/list.service.js";

export async function listCommand(): Promise<void> {
  const config = loadConfig();

  const backups = await listBackups(config);

  if (backups.length === 0) {
    console.log("No backups found");
    return;
  }

  console.log("Available backups:");

  for (const backup of backups) {
    console.log("");
    console.log(`File: ${backup.filename}`);
    console.log(`Database: ${backup.database}`);
    console.log(`Type: ${backup.type}`);
    console.log(`Size: ${backup.size} bytes`);
    console.log(`Created: ${backup.createdAt}`);
  }
}
