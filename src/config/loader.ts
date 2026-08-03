import "dotenv/config";

import type { AppConfig, DatabaseType } from "./types.js";

function requireEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function parseDatabaseType(value: string): DatabaseType {
  if (value === "postgres" || value === "mysql") {
    return value;
  }

  throw new Error(`Unsupported database type: ${value}`);
}

export function loadConfig(): AppConfig {
  return {
    backupDirectory: process.env.BACKUP_DIRECTORY ?? "./backups",
    database: {
      type: parseDatabaseType(requireEnv("DB_TYPE")),
      host: requireEnv("DB_HOST"),
      port: Number(requireEnv("DB_PORT")),
      username: requireEnv("DB_USERNAME"),
      password: requireEnv("DB_PASSWORD"),
      database: requireEnv("DB_NAME"),
    },
  };
}
