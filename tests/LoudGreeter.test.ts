import { LoudGreeter } from "../src/LoudGreeter";

describe("LoudGreeter class", () => {
  test("greeting is set from the parameter", () => {
    const loudGreeter: LoudGreeter = new LoudGreeter("Hello");
    expect(loudGreeter.greeting).toBe("Hello");
  });
  test("greet method works", () => {
    const loudGreeter: LoudGreeter = new LoudGreeter("Hello");
    expect(loudGreeter.greet("Rich")).toBe("Hello, Rich!!");
  });
  test("greet method works after calling add volume", () => {
    const loudGreeter: LoudGreeter = new LoudGreeter("Hello");
    loudGreeter.addVolume();
    expect(loudGreeter.greet("Rich")).toBe("Hello, Rich!!!");
  });
  test("greet method works after calling add volume twice", () => {
    const loudGreeter: LoudGreeter = new LoudGreeter("Hello");
    loudGreeter.addVolume();
    loudGreeter.addVolume();
    loudGreeter.addVolume();
    expect(loudGreeter.greet("Rich")).toBe("Hello, Rich!!!!!");
  });
});
