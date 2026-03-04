const { calculateEntropy } = require("../../src/popup");

describe("calculateEntropy()", () => {
  test("entropy increases with length", () => {
    const shortEntropy = calculateEntropy("abc");
    const longEntropy = calculateEntropy("abcdefghijklmnop");
    expect(longEntropy).toBeGreaterThan(shortEntropy);
  });

  test("entropy increases with character variety", () => {
    const simple = calculateEntropy("aaaaaa");
    const complex = calculateEntropy("Aa1!Aa1!");
    expect(complex).toBeGreaterThan(simple);
  });

  test("handles unicode characters", () => {
    const entropy = calculateEntropy("pä$$WørD!");
    expect(entropy).toBeGreaterThan(0);
  });

  test("handles empty string", () => {
    expect(calculateEntropy("")).toBe(0);
  });
});
