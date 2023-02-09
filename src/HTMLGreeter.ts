import { Greeter } from "./Greeter";

export class HTMLGreeter extends Greeter {
  greeting: string;
  tagName: string = "h1";
  constructor(greeting: string, tagName: string) {
    super(greeting);
    this.greeting = greeting;
  }
  greet(name: string): string {
    return `${this.tagName}, ${this.greeting}, ${name}!`;
  }
}
