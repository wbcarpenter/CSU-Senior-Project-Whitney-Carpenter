const { evaluatePassword } = require("../../src/popup");

describe("unicode handling", () => {
  test("handles accented characters", () => {
    const result = evaluatePassword("pä$$WørD!");
    expect(result.label).toBeDefined();
  });

  test("handles emoji", () => {
    const result = evaluatePassword("😀Password123!");
    expect(result.label).toBeDefined();
  });
});
