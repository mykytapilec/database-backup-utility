import { readFile } from "node:fs/promises";
import { join } from "node:path";

import type { BackupMetadata } from "../types/backup.js";
import type { AppConfig } from "../config/types.js";
import { listFiles } from "../utils/filesystem.js";

export async function listBackups(
  config: AppConfig,
): Promise<BackupMetadata[]> {
  const files = await listFiles(config.backupDirectory);

  const metadataFiles = files.filter((file) => file.endsWith(".json"));

  const backups = await Promise.all(
    metadataFiles.map(async (file) => {
      const content = await readFile(
        join(config.backupDirectory, file),
        "utf-8",
      );

      return JSON.parse(content) as BackupMetadata;
    }),
  );

  return backups.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}
