import { mkdir, readdir } from "node:fs/promises";

export async function ensureDirectory(path: string): Promise<void> {
  await mkdir(path, {
    recursive: true,
  });
}

export async function listFiles(path: string): Promise<string[]> {
  try {
    return await readdir(path);
  } catch {
    return [];
  }
}
