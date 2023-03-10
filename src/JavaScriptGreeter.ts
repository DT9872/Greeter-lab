import { Greeter } from "./Greeter";

export class JavaScriptGreeter extends Greeter {
  constructor(greeting: string) {
    super(greeting);
  }
  greet(name: string): string {
    return `console.log('${super.greet(name)}')`;
  }
}

const testGreeter: JavaScriptGreeter = new JavaScriptGreeter("Sup");
console.log(testGreeter.greet("Bryson"));
