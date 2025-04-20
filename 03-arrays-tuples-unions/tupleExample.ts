// tupleExample.ts
// Create a tuple representing a point in 2D space.

export type Point = [number, number];

export function distance(a: Point, b: Point): number {
  const dx = a[0] - b[0];
  const dy = a[1] - b[1];
  return Math.sqrt(dx * dx + dy * dy);
}

// AI prompt: "What are the differences between arrays and tuples in TypeScript?"
