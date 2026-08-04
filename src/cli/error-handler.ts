export function handleCliError(error: unknown): void {
  if (error instanceof Error) {
    console.error(`✖ Error: ${error.message}`);
  } else {
    console.error("✖ Unknown error occurred");
  }

  process.exitCode = 1;
}
