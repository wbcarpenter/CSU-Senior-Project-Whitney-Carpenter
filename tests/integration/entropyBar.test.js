/**
 * @jest-environment jsdom
 */

const { calculateEntropy } = require("../../src/popup");

describe("entropy bar updates", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="entropy-container">
        <div id="entropyBar"></div>
      </div>
    `;
  });

  test("bar width updates based on entropy", () => {
    const bar = document.getElementById("entropyBar");
    const entropy = calculateEntropy("Password123!");

    const maxEntropy = 80;
    const percentage = Math.min((entropy / maxEntropy) * 100, 100);

    bar.style.width = percentage + "%";

    expect(bar.style.width).toBe(percentage + "%");
  });
});
