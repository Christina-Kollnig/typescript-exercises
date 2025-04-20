/*
Exercise 3: Narrowing & Type Guards

Task:
1. Write a function that takes a parameter of type string | number and logs different messages based on the type.
2. Add a user-defined type guard for a custom type.
3. Use an AI tool to suggest alternative narrowing strategies. Try different approaches and discuss their pros and cons.
*/

function printType(x: string | number) {
  if (typeof x === "string") {
    console.log("It is a string: " + x.toUpperCase());
  } else {
    console.log("It is a number: " + x * 2);
  }
}

// Try writing your own type guard for a custom type and use it in a function.
// Use AI to help you explore different narrowing strategies.
// Occasionally, try omitting or changing types to see what happens.
