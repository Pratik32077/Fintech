import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Sends a JSON payload to a Formspree endpoint (or similar HTTP receiver).
 *
 * The function returns `true` when the request completes with an HTTP 2xx
 * status; otherwise it returns `false` and logs an error to the console.
 */
export async function sendFormData(url: string, data: Record<string, any>): Promise<boolean> {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(`form submission failed (${res.status}):`, text);
      return false;
    }

    return true;
  } catch (err) {
    console.error('form submission error', err);
    return false;
  }
}
