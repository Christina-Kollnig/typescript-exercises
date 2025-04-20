// instanceofExample.ts
// Use instanceof to narrow types.

class Animal {
  speak() {
    return "I'm an animal";
  }
}

class Dog extends Animal {
  bark() {
    return "Woof!";
  }
}

export function speakOrBark(a: Animal): string {
  if (a instanceof Dog) {
    return a.bark();
  }
  return a.speak();
}

// AI prompt: "How does instanceof work with custom classes?"
