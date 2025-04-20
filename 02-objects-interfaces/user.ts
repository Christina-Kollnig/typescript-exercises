/*
Exercise 2: Objects & Interfaces

Task:
1. Define an interface or type for a real-world object (e.g., User, Product).
2. Create a function that takes this object and returns a formatted string.
3. Use an AI tool to suggest alternative object structures or function signatures. Try different approaches and discuss their pros and cons.
*/

interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Alice",
  age: 25,
};

function formatUser(u: User): string {
  return `${u.name} is ${u.age} years old.`;
}

// Try changing the structure or types, or omitting types, and see what happens.
// Use AI to help you explore different object shapes and function signatures.
