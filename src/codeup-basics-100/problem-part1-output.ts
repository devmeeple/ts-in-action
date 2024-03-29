export class ProblemPart1Output {
  printHello() {
    return 'Hello';
  }

  printHelloWorld() {
    return 'Hello World';
  }

  printHelloWorldWithTemplateLiteral() {
    return 'Hello\n World';
  }

  printHelloWithSingle() {
    return `'Hello'`;
  }

  printHelloWorldWithDouble() {
    return `"Hello"`;
  }

  printSpecialCharacters() {
    return `"!@#$%^&*()"`;
  }

  printFilePath() {
    return `"C:\\Download\\hello.cpp"`;
  }

  printShape() {
    const shape = `┌┬┐
├┼┤
└┴┘`;
    return shape;
  }
}
