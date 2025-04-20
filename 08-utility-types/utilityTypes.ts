// utilityTypes.ts
// Use Partial, Readonly, and Record utility types.

type User = {
  id: number;
  name: string;
  email: string;
};

export type PartialUser = Partial<User>;
export type ReadonlyUser = Readonly<User>;
export type UserMap = Record<number, User>;

// AI prompt: "What other utility types are built into TypeScript?"
