const { evaluatePassword } = require("../../src/popup");

describe("suggestions()", () => {
  test("suggests uppercase when missing", () => {
    const result = evaluatePassword("password123!");
    expect(result.suggestions).toContain("Add uppercase letters.");
  });

  test("suggests numbers when missing", () => {
    const result = evaluatePassword("Password!");
    expect(result.suggestions).toContain("Include numbers.");
  });

  test("suggests special characters when missing", () => {
    const result = evaluatePassword("Password123");
    expect(result.suggestions).toContain("Include special characters.");
  });
});
