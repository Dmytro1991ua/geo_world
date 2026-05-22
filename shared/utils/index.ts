import { type ClassValue, clsx } from 'clsx';
import { FetchError } from 'ofetch';
import { twMerge } from 'tailwind-merge';

// Wraps server logic with centralized error handling.
// This keeps API routes clean and avoids repeating try/catch everywhere.
export async function fetchFromExternalApi<T>(handler: () => Promise<T>): Promise<T> {
  try {
    return await handler();
  } catch (e) {
    // 1. Handle network/fetch errors from external APIs
    if (e instanceof FetchError) {
      console.error('[fetchFromExternalApi] FetchError:', e.status, e.message, e.data);
      throw createError({
        statusCode: e.status || 500,
        statusMessage: e.message || 'External API Error',
      });
    }

    // 2. Handle standard code crashes
    if (e instanceof Error) {
      console.error('[fetchFromExternalApi] Error:', e.message, e.stack);
      throw createError({
        statusCode: 500,
        statusMessage: e.message,
      });
    }

    // 3. Fallback for completely unknown errors
    console.error('[fetchFromExternalApi] Unknown error:', e);
    throw createError({
      statusCode: 500,
      statusMessage: 'An internal server error occurred.',
    });
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
