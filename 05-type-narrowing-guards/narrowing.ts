// narrowing.ts
// Write a function that accepts a string or number and returns its length (for string) or digits (for number).

export function getLengthOrDigits(x: string | number): number {
  if (typeof x === "string") {
    return x.length;
  } else {
    return x.toString().length;
  }
}

// AI prompt: "What other type guards can I use in TypeScript?"
