import { Command } from "commander";

import { backupCommand } from "../commands/backup.js";
import { restoreCommand } from "../commands/restore.js";
import { listCommand } from "../commands/list.js";

export function registerCommands(program: Command): void {
  program
    .command("backup")
    .description("Create database backup")
    .action(async () => {
      await backupCommand();
    });

  program
    .command("restore <backupFile>")
    .description("Restore database backup")
    .action(async (backupFile) => {
      await restoreCommand(backupFile);
    });

  program
    .command("list")
    .description("List available backups")
    .action(listCommand);
}
