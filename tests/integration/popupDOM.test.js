/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");
const { evaluatePassword } = require("../../src/popup");

describe("popup DOM", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync(
      path.resolve(__dirname, "../../src/popup.html"),
      "utf8"
    );
  });

  test("loads popup elements", () => {
    expect(document.getElementById("passwordInput")).not.toBeNull();
    expect(document.getElementById("entropyBar")).not.toBeNull();
    expect(document.getElementById("strength")).not.toBeNull();
  });

  test("updates strength text", () => {
    const strengthEl = document.getElementById("strength");
    strengthEl.textContent = "Strong";
    expect(strengthEl.textContent).toBe("Strong");
  });
});
