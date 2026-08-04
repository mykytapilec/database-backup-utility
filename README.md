# Database Backup Utility

CLI utility for creating, restoring and managing PostgreSQL database backups.

Project created as part of the roadmap.sh backend projects:

https://roadmap.sh/projects/database-backup-utility

## Features

- Create PostgreSQL database backups
- Restore PostgreSQL databases from backup files
- Store backup metadata
- List available backups
- CLI error handling
- PostgreSQL tools validation
- Environment-based configuration

## Requirements

Before running the project, make sure you have:

- Node.js 20+
- npm
- PostgreSQL client tools

Check PostgreSQL tools:

```bash
pg_dump --version
psql --version
```

## Installation

Clone the repository:

```bash
git clone https://github.com/mykytapilec/database-backup-utility.git

cd database-backup-utility
```

Install dependencies:

```bash
npm install
```

Build the project:

```bash
npm run build
```

## Configuration

Create environment configuration:

```bash
cp .env.example .env
```

Example `.env`:

```env
DATABASE_TYPE=postgres

DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=password
DATABASE_NAME=my_database

BACKUP_DIRECTORY=./backups
```

## Development

Run project in development mode:

```bash
npm run dev
```

Format code:

```bash
npm run format
```

Run type checking and linting:

```bash
npm run check
```

Build project:

```bash
npm run build
```

## CLI Usage

### Create backup

```bash
database-backup backup
```

Creates a backup file and metadata file:

```text
backups/
├── backup-<timestamp>.sql
└── backup-<timestamp>.json
```

---

### List backups

```bash
database-backup list
```

Displays available backups with metadata:

- filename
- database name
- backup type
- file size
- creation date

---

### Restore backup

```bash
database-backup restore ./backups/backup.sql
```

Restores database from selected backup file.

## Project Structure

```text
src/
├── cli/
│   ├── async-handler.ts
│   ├── commands.ts
│   └── error-handler.ts
│
├── commands/
│   ├── backup.ts
│   ├── list.ts
│   └── restore.ts
│
├── config/
│   ├── index.ts
│   ├── loader.ts
│   └── types.ts
│
├── database/
│   ├── postgres.ts
│   └── restore.ts
│
├── services/
│   ├── backup.service.ts
│   ├── list.service.ts
│   ├── metadata.service.ts
│   └── restore.service.ts
│
├── types/
│   └── backup.ts
│
└── utils/
    ├── file-info.ts
    ├── filesystem.ts
    └── system.ts
```

## Architecture

Application layers:

```text
CLI
 |
Commands
 |
Services
 |
Database adapters
 |
PostgreSQL tools
```

## Error Handling

The CLI provides:

- centralized async error handling
- readable error messages
- non-zero exit codes on failures
- external dependency checks

Examples:

```text
✖ Error: pg_dump is not installed
```

```text
✖ Error: Backup file not found
```

## Supported Database Engines

Currently supported:

- PostgreSQL

Possible future support:

- MySQL
- SQLite

## License

MIT