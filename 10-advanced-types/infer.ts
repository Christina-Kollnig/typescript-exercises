// infer.ts
// Use 'infer' in a conditional type to extract the return type of a function.

type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;

export function double(x: number): number {
  return x * 2;
}

export type DoubleReturn = ReturnTypeOf<typeof double>;

// AI prompt: "How does 'infer' work in conditional types?"
