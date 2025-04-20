import { describe, it, expect } from "vitest";
import { add } from "./add";

describe("add", () => {
  it("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
  it("adds negative numbers", () => {
    expect(add(-1, -2)).toBe(-3);
  });
});
