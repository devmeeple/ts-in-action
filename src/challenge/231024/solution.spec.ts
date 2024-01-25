import { solution } from './solution';

describe('231024 문제풀이', () => {
  describe('홀짝에 따라 다른 값 반환하기', () => {
    it.each([
      { n: 7, expected: 16 },
      { n: 10, expected: 220 },
    ])('모든 양의 정수의 합을 반환', ({ n, expected }) => {
      expect(solution.sumBasedOnParity(n)).toStrictEqual(expected);
    });
  });
  describe('길이에 따른 연산', () => {
    it.each([
      { num_list: [3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1], expected: 51 },
      { num_list: [2, 3, 4, 5], expected: 120 },
    ])(
      '길이가 10이상이라면 합을, 이하라면 곱을 반환',
      ({ num_list, expected }) => {
        expect(solution.lengthBasedOperations(num_list)).toStrictEqual(
          expected,
        );
      },
    );
  });
  describe('정수 부분', () => {
    it.each([
      { flo: 1.42, expected: 1 },
      { flo: 69.32, expected: 69 },
    ])('$flo의 정수부분은 $expected', ({ flo, expected }) => {
      expect(solution.getIntegerPart(flo)).toStrictEqual(expected);
    });
  });
  describe('원소들의 곱과 합', () => {
    it.each([
      { num_list: [3, 4, 5, 2, 1], expected: 1 },
      { num_list: [5, 7, 8, 3], expected: 0 },
    ])('작으면 1 크면 0을 반환', ({ num_list, expected }) => {
      expect(solution.sumElements(num_list)).toStrictEqual(expected);
    });
  });
});
