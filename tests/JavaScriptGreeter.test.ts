import { JavaScriptGreeter } from "../src/JavaScriptGreeter";


describe("JavaScriptGreeter class", () => {
    test("JavaScriptGreeter method works", => {
    const javaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter("Hello");
    expect(JavaScriptGreeter.greet("Grant")).toBe("console.log('Hello, Grant!')");
  });
});
