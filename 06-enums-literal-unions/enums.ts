// enums.ts
// Use an enum to represent days of the week.

export enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

export function isWeekend(day: Day): boolean {
  return day === Day.Saturday || day === Day.Sunday;
}

// AI prompt: "How do string enums work in TypeScript?"
