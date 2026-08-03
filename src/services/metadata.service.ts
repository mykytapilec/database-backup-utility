import { writeFile } from "node:fs/promises";
import { join } from "node:path";

import type { BackupMetadata } from "../types/backup.js";

export async function saveBackupMetadata(
  directory: string,
  metadata: BackupMetadata,
): Promise<void> {
  const metadataPath = join(directory, `${metadata.filename}.json`);

  await writeFile(metadataPath, JSON.stringify(metadata, null, 2), "utf-8");
}
