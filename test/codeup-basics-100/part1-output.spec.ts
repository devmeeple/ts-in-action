import { Part1Output } from '../../src/codeup-basics-100/part1-output';

describe('CodeUp [1001 ~ 1008] 기초-출력', () => {
  // sut는 검증하려는 대상을 의미
  const sut = new Part1Output();

  describe('[1001] 출력하기01', () => {
    it('Hello 를 출력한다', () => {
      // https://codeup.kr/problem.php?id=1001
      expect(sut.printHello()).toBe('Hello');
    });
  });

  describe('[1002] 출력하기02', () => {
    it('Hello World 를 출력한다', () => {
      // https://codeup.kr/problem.php?id=1002
      expect(sut.printHelloWorld()).toBe('Hello World');
    });
  });

  describe('[1003] 출력하기03', () => {
    it('줄을 바꿔 Hello World 를 출력한다', () => {
      // https://codeup.kr/problem.php?id=1003
      // template literal 로 해결하려고 했지만 정상적으로 출력되지 않음
      expect(sut.printHelloWorldWithTemplateLiteral()).toBe('Hello\n World');
    });
  });

  describe('[1004] 출력하기04', () => {
    it('작은 따옴표(single quotation mark)를 포함한 Hello 를 출력한다', () => {
      // https://codeup.kr/problem.php?id=1004
      expect(sut.printHelloWithSingle()).toBe(`'Hello'`);
    });
  });

  describe('[1005] 출력하기05', () => {
    it('큰따옴표(double quotation mark)를 포함한  Hello World 를 출력한다', () => {
      // https://codeup.kr/problem.php?id=1005
      expect(sut.printHelloWorldWithDouble()).toBe(`"Hello"`);
    });
  });

  describe('[1006] 출력하기06', () => {
    it('특수문자를 출력한다', () => {
      // https://codeup.kr/problem.php?id=1006
      expect(sut.printSpecialCharacters()).toBe(`"!@#$%^&*()"`);
    });
  });

  describe('[1007] 출력하기07', () => {
    it('파일 경로를 출력한다', () => {
      // https://codeup.kr/problem.php?id=1007
      expect(sut.printFilePath()).toBe(`"C:\\Download\\hello.cpp"`);
    });
  });

  describe('[1008] 출력하기08', () => {
    it('유니코드로 표현된 특수문자를 출력한다', () => {
      // https://codeup.kr/problem.php?id=1008
      const shape = `┌┬┐
├┼┤
└┴┘`;
      expect(sut.printShape()).toBe(shape);
    });
  });
});
