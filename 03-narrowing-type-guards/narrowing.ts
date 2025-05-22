/*
Exercise 3: Type Narrowing and Type Guards in TypeScript

Instructions:
1. Write a function that accepts either a string or a number as its input.
2. Use TypeScript's type narrowing features (like `typeof` or custom type guards)
   to handle each type appropriately:
   - If the input is a string, print its length.
   - If it's a number, print its square.
3. Make sure your function works for both types without errors.

Optional Exploration:
- Try creating your own type guard for a custom object type (like an interface or
  class) and use it in a function.
- Experiment with handling arrays that contain both strings and numbers—how can
  you safely process each element?

AI Prompts:
- What are the different ways to narrow types in TypeScript?
- How do user-defined type guards work, and when should I use them?
- How does TypeScript help prevent runtime errors when working with union types?
*/

// Datei: 03-narrowing-type-guards/narrowing.ts

// 1. Funktion, die einen string oder number verarbeitet
export function processInput(input: string | number): void {
  if (typeof input === 'string') {
    // String-Zweig: Länge ausgeben
    console.log(`String length: ${input.length}`);
  } else {
    // Number-Zweig: Quadrat berechnen
    console.log(`Number squared: ${input * input}`);
  }
}

// 2. Smoke-Tests
console.log("=== Smoke Tests ===");
processInput("Hello"); // erwartet: String length: 5
processInput(7);       // erwartet: Number squared: 49
