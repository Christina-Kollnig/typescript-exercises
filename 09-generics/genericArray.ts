// genericArray.ts
// Write a function that returns the first element of an array of any type.

export function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

// AI prompt: "Can I make this function work only for arrays of objects with a 'name' property?"
