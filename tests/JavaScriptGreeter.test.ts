import { JavaScriptGreeter } from "../src/JavaScriptGreeter";

describe("JavaScriptGreeter class", () => {
  //     test("JavaScriptGreeter method works", => {
  //     const javaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter("Hello");
  //     expect(javaScriptGreeter.greet("Grant")).toBe("console.log('Hello, Grant!')");
  //   });
  test("greeting is set from the parameter", () => {
    const javaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter("Hello");
    expect(javaScriptGreeter.greeting).toBe("Hello");
  });
  test("the greet method overrides the parent greet method", () => {
    const javaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter("Hi");
    expect(javaScriptGreeter.greet("Isaac")).toBe("console.log('Hi, Isaac!')");
  });
});
