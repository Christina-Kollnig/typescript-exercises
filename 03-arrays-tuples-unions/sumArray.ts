// sumArray.ts
// Write a function that sums all numbers in an array.

export function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0);
}

// AI prompt: "How can I make this work for arrays of strings?"
