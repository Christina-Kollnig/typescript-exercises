/*
Exercise 5: Using `as const` and `satisfies` for Safer TypeScript Code

Instructions:
1. Create an array of color names (like 'red', 'green', 'blue') and use
   `as const` to make it immutable and preserve the literal types of its values.
2. Define a type or interface for a palette object that has properties like
   `primary` and `secondary`, each set to one of your color names.
3. Create a palette object that uses the `satisfies` operator to ensure it
   matches your palette type, while still inferring the most specific types for
   its properties.

Optional Exploration:
- Try changing the values in your `as const` array or object—what happens if you
  try to modify them?
- Experiment with omitting or adding properties to your `satisfies` object—how
  does TypeScript respond?
- Try combining `as const` and `satisfies` on the same object.

AI Prompts:
- What is the difference between `as const` and regular type annotations?
- How does the `satisfies` operator help with type inference and validation?
- When should I use `as const` or `satisfies` in real-world TypeScript
  projects?
*/
