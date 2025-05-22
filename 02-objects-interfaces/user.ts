/*
Exercise 2: Working with Objects and Interfaces in TypeScript

Instructions:
1. Create an object that represents a user, with at least a `name` (string) and `age` (number).  
2. Define a TypeScript interface for the user shape, and use it to type your object.  
3. Write a function that takes a user object and returns a formatted string like:  
  "Alice is 30 years old."

Optional Exploration:
- Add more properties to the user (e.g., email, isAdmin) and update the interface and function.
- Try omitting the interface and see how TypeScript infers types.
- Try defining the user shape using both `interface` and `type`—what differences do you notice?
- Make some properties optional and handle them in your function.

AI Prompts:
- What happens if I add extra properties to the user object?
- How does TypeScript help prevent mistakes when working with object shapes?
- When should I use an interface vs. a type alias for objects?
*/


// 1. Interface für den User
export interface User {
  name: string;
  age: number;
  email?: string;    // optionales Feld
  isAdmin?: boolean; // optionales Feld
}

// 2. Objekt vom Typ User
export const user: User = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
  isAdmin: true
};

// 3. Funktion, die den User formatiert
export function formatUser(u: User): string {
  const base = `${u.name} is ${u.age} years old.`;
  if (u.email) {
    return `${base} Email: ${u.email}.`;
  }
  return base;
}

// 4. Kurzer Smoke-Test
console.log(formatUser(user));
console.log(formatUser({ name: "Bob", age: 22 }));
