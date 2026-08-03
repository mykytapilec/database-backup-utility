export type DatabaseType = "postgres" | "mysql";

export interface DatabaseConfig {
  type: DatabaseType;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export interface AppConfig {
  backupDirectory: string;
  database: DatabaseConfig;
}
