import { Command } from "commander";

import { registerCommands } from "./commands.js";

export function createCli(): Command {
  const program = new Command();

  program
    .name("database-backup")
    .description("Database backup utility CLI")
    .version("1.0.0");

  registerCommands(program);

  return program;
}
