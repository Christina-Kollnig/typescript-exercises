/*
Exercise 1: Writing a Simple Add Function in TypeScript

Instructions:
1. Write a function that takes two numbers and returns their sum. Use TypeScript type annotations for the parameters and the return value.  
2. Implement this function in three different ways:
  - As a standard function declaration
  - As a function expression
  - As an arrow function

Optional Exploration:
- Try removing or changing the type annotations and see what errors or warnings TypeScript gives you.
- Run `tsc` (the TypeScript compiler) with and without the `--strict` flag to see how type checking changes.
- Bonus: Extend your function to handle string inputs as well, and discuss what changes are needed.

AI Prompts:
- What happens if I leave out the type annotations? How does TypeScript infer the types?
- Which function style is most common in real-world TypeScript projects, and why?
- How can I make my add function safer or more flexible?
*/

// 1. Standard function declaration
function add(a: number, b: number): number {
  return a + b;
}

// 2. Function expression
const addExpression: (a: number, b: number) => number = function(a, b) {
  return a + b;
};

// 3. Arrow function
const addArrow = (a: number, b: number): number => {
  return a + b;
};

// Bonus: String- und Number-Verarbeitung
function addFlexible(a: number | string, b: number | string): number | string {
  if (typeof a === 'string' || typeof b === 'string') {
    // Wenn mindestens eines ein String ist, beides in String umwandeln
    return String(a) + String(b);
  }
  // Sonst normale Zahlenaddition
  return a + b;
}

// ganz unten in add.ts
console.log("add(2,3)         =", add(2, 3));            // 5
console.log("addExpression(7,8)=", addExpression(7, 8));  // 15
console.log("addArrow(-1,1)     =", addArrow(-1, 1));     // 0
console.log("addFlexible('a','b')=", addFlexible("a","b")); // "ab"
console.log("addFlexible(1,'2')  =", addFlexible(1,"2"));   // "12"