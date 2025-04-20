// userInterface.ts
// Define a User using both interface and type alias.

export interface User {
  id: number;
  name: string;
}

export type UserAlias = {
  id: number;
  name: string;
};

export function greet(user: User): string {
  return `Hello, ${user.name}!`;
}

// AI prompt: "When should I use an interface vs a type alias?"
