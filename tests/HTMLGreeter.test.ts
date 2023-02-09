// import { Greeter } from "../src/Greeter";

import { HTMLGreeter } from "../src/HTMLGreeter";

describe("HTMLGreeter class", () => {
  test("HTMLGreeter method works with set value", () => {
    const htmlGreeter: HTMLGreeter = new HTMLGreeter("Hello", "Grant", "");
    expect(htmlGreeter.greet).toBe("h1 Hello, Grant!");
  });
  //   test("HTMLGreeter method works", () => {
  //     const htmlGreeter: HTMLGreeter = new HTMLGreeter("Hello", "Grant", "");
  //     expect(htmlGreeter.greet).toBe("<h1>Hello, Grant!</h1>");
  //   });
  //   test("HTMLGreeter method works ", () => {
  //     const htmlGreeter: HTMLGreeter = new HTMLGreeter("Hola", "Sara", "");
  //     expect(htmlGreeter.greet).toBe("<h1>Hola, Sara!</h1>");
  //   });
  //   test("HTMLGreeter method works with different tag", () => {
  //     const htmlGreeter: HTMLGreeter = new HTMLGreeter("Hello", "Grant", "h2");
  //     expect(htmlGreeter.greet).toBe("<h2>Hello, Grant!</h2>");
  //   });
});
