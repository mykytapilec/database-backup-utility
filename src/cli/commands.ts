import { Command } from "commander";

import { asyncHandler } from "./async-handler.js";
import { backupCommand } from "../commands/backup.js";
import { listCommand } from "../commands/list.js";
import { restoreCommand } from "../commands/restore.js";

export function registerCommands(program: Command): void {
  program
    .command("backup")
    .description("Create database backup")
    .action(
      asyncHandler(async () => {
        await backupCommand();
      }),
    );

  program
    .command("restore <backupFile>")
    .description("Restore database backup")
    .action(
      asyncHandler(async (backupFile: string) => {
        await restoreCommand(backupFile);
      }),
    );

  program
    .command("list")
    .description("List available backups")
    .action(
      asyncHandler(async () => {
        await listCommand();
      }),
    );
}
