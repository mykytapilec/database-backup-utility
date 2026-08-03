import { join } from "node:path";

import type { AppConfig } from "../config/types.js";
import { createPostgresBackup } from "../database/postgres.js";
import { ensureDirectory } from "../utils/filesystem.js";
import { getFileSize } from "../utils/file-info.js";
import { saveBackupMetadata } from "./metadata.service.js";

function createBackupFilename(): string {
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

  return `backup-${timestamp}.sql`;
}

export async function runBackup(config: AppConfig): Promise<void> {
  await ensureDirectory(config.backupDirectory);

  const filename = createBackupFilename();
  const outputFile = join(config.backupDirectory, filename);

  if (config.database.type !== "postgres") {
    throw new Error("Only PostgreSQL backup is supported");
  }

  await createPostgresBackup(config.database, outputFile);

  const metadata = {
    filename,
    database: config.database.database,
    type: config.database.type,
    createdAt: new Date().toISOString(),
    size: await getFileSize(outputFile),
  };

  await saveBackupMetadata(config.backupDirectory, metadata);

  console.log(`Backup created: ${outputFile}`);
}
