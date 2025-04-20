/*
Exercise 5: `as const` & `satisfies`

Task:
1. Use `as const` to create a readonly array or object and explain its benefits.
2. Use `satisfies` to validate an object against a type while keeping type inference.
3. Use an AI tool to suggest alternative approaches. Try different ways and discuss their pros and cons.
*/

const colors = ["red", "green", "blue"] as const;

const person = {
  name: "Alice",
  age: 30,
} satisfies { name: string; age: number };

// Try changing the structure or types, or omitting types, and see what happens.
// Use AI to help you explore different ways to use `as const` and `satisfies`.
