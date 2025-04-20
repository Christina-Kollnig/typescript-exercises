// satisfiesExample.ts
// Use 'satisfies' to ensure an object matches a type.

type Config = {
  port: number;
  debug: boolean;
};

export const config = {
  port: 8080,
  debug: true,
} satisfies Config;

// AI prompt: "How is 'satisfies' different from type assertions?"
