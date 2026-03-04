const { evaluatePassword } = require("../../src/popup");

describe("evaluatePassword()", () => {
  test("detects weak password", () => {
    const result = evaluatePassword("password123");
    expect(result.label).toBe("Weak");
  });

  test("detects strong password", () => {
    const result = evaluatePassword("L!m@x#9Qz2");
    expect(result.label).toBe("Strong");
  });

  test("generates suggestions for weak passwords", () => {
    const result = evaluatePassword("123456");
    expect(result.suggestions.length).toBeGreaterThan(0);
  });

  test("no suggestions for strong passwords", () => {
    const result = evaluatePassword("L!m@x#9Qz2");
    expect(result.suggestions.length).toBe(0);
  });
});
