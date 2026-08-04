import { handleCliError } from "./error-handler.js";

export function asyncHandler<T extends unknown[]>(
  action: (...args: T) => Promise<void>,
): (...args: T) => Promise<void> {
  return async (...args: T) => {
    try {
      await action(...args);
    } catch (error) {
      handleCliError(error);
    }
  };
}
