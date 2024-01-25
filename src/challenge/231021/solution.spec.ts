import { solution } from './solution';

describe('231021 문제풀이', () => {
  describe('소문자로 바꾸기', () => {
    it.each([
      { myString: 'aBcDeFg', expected: 'abcdefg' },
      { myString: 'aaa', expected: 'aaa' },
    ])('모든 알파벳을 소문자로 변환한다.', ({ myString, expected }) => {
      expect(solution.conversionLowerCase(myString)).toBe(expected);
    });
  });

  describe('공배수', () => {
    it.each([
      [60, 2, 3, 1],
      [55, 10, 5, 0],
    ])(
      'number(%s)가 n(%s)의 배수이면서 m(%s)의 배수이면 %s을 return',
      (number, n, m, expected) => {
        expect(solution.commonMultiple(number, n, m)).toStrictEqual(expected);
      },
    );
  });

  describe('문자열 앞의 n글자 ', () => {
    it.each([
      { my_string: 'ProgrammerS123', n: 11, expected: 'ProgrammerS' },
      { my_string: 'He110W0r1d', n: 5, expected: 'He110' },
    ])(
      '$my_string 앞의 $n 글자로 이루어진 $expected 를 return',
      ({ my_string, n, expected }) => {
        expect(solution.getFirstNCharacter(my_string, n)).toBe(expected);
      },
    );
  });

  describe('특정한 문자를 대문자로 바꾸기', () => {
    it.each([
      { my_string: 'programmers', alp: 'p', expected: 'Programmers' },
      { my_string: 'lowercase', alp: 'x', expected: 'lowercase' },
    ])(
      '$my_string 에서 모든 $alp 를 대문자로 변환',
      ({ my_string, alp, expected }) => {
        expect(solution.convertSpecificCharToUpperCase(my_string, alp)).toBe(
          expected,
        );
      },
    );
  });
});
