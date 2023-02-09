import { Greeter } from "./Greeter";

export class JavaScriptGreeter extends Greeter {
  greeting: string;
  constructor(greeting: string) {
    super(greeting);
    this.greeting = greeting;
  }
  greet(name: string): string {
    return "console.log(`${this.greeting}, ${name}!`)";
  }
}
