import { solution } from './solution';

describe('231026 문제풀이', () => {
  describe('n 번째 원소부터', () => {
    it.each([
      { num_list: [2, 1, 6], n: 3, expected: [6] },
      { num_list: [5, 2, 1, 7, 5], n: 2, expected: [2, 1, 7, 5] },
    ])(
      '$num_list의 $n번째 까지 담은 배열은 $expected',
      ({ num_list, n, expected }) => {
        expect(solution.getElementsFromNthToEnd(num_list, n)).toStrictEqual(
          expected,
        );
      },
    );
  });

  describe('정수 찾기', () => {
    it.each([
      { num_list: [1, 2, 3, 4, 5], n: 3, expected: 1 },
      { num_list: [15, 98, 23, 2, 15], n: 20, expected: 0 },
    ])(
      '$num_list에서 $n이 포함여부: $expected',
      ({ num_list, n, expected }) => {
        expect(solution.findIntegerInList(num_list, n)).toStrictEqual(expected);
      },
    );
  });

  describe('문자열 뒤의 n글자', () => {
    it.each([
      { my_string: 'ProgrammerS123', n: 11, expected: 'grammerS123' },
      { my_string: 'He110W0r1d', n: 5, expected: 'W0r1d' },
    ])('$my_string의 뒤의 $n글자는 $expected', ({ my_string, n, expected }) => {
      expect(solution.getLastNCharacters(my_string, n)).toStrictEqual(expected);
    });
  });

  describe('마지막 두 원소', () => {
    it.each([
      { num_list: [2, 1, 6], expected: [2, 1, 6, 5] },
      { num_list: [5, 2, 1, 7, 5], expected: [5, 2, 1, 7, 5, 10] },
    ])('마지막 두 원소를 비교하여 출력', ({ num_list, expected }) => {
      expect(solution.appendModifiedLastElement(num_list)).toStrictEqual(
        expected,
      );
    });
  });
});
