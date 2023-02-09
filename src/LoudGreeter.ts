import { Greeter } from "./Greeter";

export class LoudGreeter extends Greeter {
  greeting: string;
  extra: string = "!";
  constructor(greeting: string, extra: string) {
    super(greeting);
    this.greeting = greeting;
  }
  greet(name: string): string {
    return `${this.greeting}, ${name}!, ${this.extra}`;
  }
}

class addVolume extends LoudGreeter {
  addVolume(): void {
    this.extra++;
  }
}
