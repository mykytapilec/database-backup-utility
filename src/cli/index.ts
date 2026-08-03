import { Command } from "commander";

const program = new Command();

program
  .name("database-backup")
  .description("Database backup utility CLI")
  .version("1.0.0");

program.parse();
