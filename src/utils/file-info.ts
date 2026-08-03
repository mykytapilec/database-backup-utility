import { stat } from "node:fs/promises";

export async function getFileSize(path: string): Promise<number> {
  const fileStats = await stat(path);

  return fileStats.size;
}
