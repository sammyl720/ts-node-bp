export interface ILogger {
  log: (...args: any[]) => void
}

export class Greeter {
  constructor(
    private logger: ILogger
  ) { }

  greet(name = "World") {
    this.logger.log(`Hello ${name}!`);
  }
}