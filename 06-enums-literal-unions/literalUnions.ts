// literalUnions.ts
// Use a literal union type for traffic light colors.

export type TrafficLight = "red" | "yellow" | "green";

export function canGo(light: TrafficLight): boolean {
  return light === "green";
}

// AI prompt: "When should I use enums vs literal unions?"
