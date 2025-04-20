// extractReturnType.ts
// Write a type that extracts the return type of any function.

export type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function greet(name: string): string {
  return `Hello, ${name}`;
}

export type GreetReturn = MyReturnType<typeof greet>;

// AI prompt: "What are mapped types and how do they work?"
