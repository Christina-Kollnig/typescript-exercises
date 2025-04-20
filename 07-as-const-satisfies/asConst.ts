// asConst.ts
// Use 'as const' to create a readonly tuple.

export const COLORS = ["red", "green", "blue"] as const;

export type Color = (typeof COLORS)[number];

// AI prompt: "What does 'as const' do in TypeScript?"
