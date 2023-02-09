import { LoudGreeter } from "../src/LoudGreeter";

describe("LoudGreeter class", () => {
  test("LoudGreeter method works", () => {
    const loudGreeter: LoudGreeter = new LoudGreeter("Hello", "!");
    expect(loudGreeter.greet).toBe("Hello, Grant!!");
  });
  //   test("LoudGreeter method works", () => {
  //     const loudGreeter: LoudGreeter = new LoudGreeter("Hello", "!");
  //     expect(loudGreeter.greet(addVolume)(2)).toBe("Hello, Grant!!!");
  //   });
});
