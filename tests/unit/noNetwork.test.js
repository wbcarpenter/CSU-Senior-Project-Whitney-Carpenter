describe("no network calls", () => {
  test("fetch is never called", () => {
    global.fetch = jest.fn();
    // simulate password checks
    require("../../src/popup");

    expect(global.fetch).not.toHaveBeenCalled();
  });
});
