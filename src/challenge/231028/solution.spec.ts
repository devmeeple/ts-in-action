import { solution } from './solution';

describe('231028 문제풀이', () => {
  describe('rny_string', () => {
    it.each([
      { rny_string: 'masterpiece', expected: 'rnasterpiece' },
      { rny_string: 'programmers', expected: 'prograrnrners' },
      { rny_string: 'jerry', expected: 'jerry' },
      { rny_string: 'burn', expected: 'burn' },
    ])('모든 m을 rn으로 변경한다.', ({ rny_string, expected }) => {
      // given
      const character = 'm';
      const trick = 'rn';

      // when
      const result = solution.replaceString(rny_string);

      // then
      expect(result).toStrictEqual(expected);
    });
  });

  describe('이어 붙인 수', () => {
    it.each([
      { num_list: [3, 4, 5, 2, 1], expected: 393 },
      { num_list: [5, 7, 8, 3], expected: 581 },
    ])(
      '홀수를 이어 붙인 수와 짝수를 이어 붙인 수를 합친다.',
      ({ num_list, expected }) => {
        // given

        // when
        const result = solution.sumOfConcatenatedOddsAndEvens(num_list);

        // then
        expect(result).toStrictEqual(expected);
      },
    );
  });

  describe('조건에 맞게 수열 변환하기 1', () => {
    it('각 원소에 대해 50보다 크거나 같은 짝수라면 2로 나눈다. 50보다 작은 홀수라면 2를 곱한다.', () => {
      // given
      const arr = [1, 2, 3, 100, 99, 98];
      const expected = [2, 2, 6, 50, 99, 49];

      // when
      const result = solution.transformValue(arr);

      // then
      expect(result).toStrictEqual(expected);
    });
  });

  describe('조건에 맞게 수열 변환하기 3', () => {
    it('k가 홀수라면 모든 원소에 k를 곱한다.', () => {
      // given
      const arr = [1, 2, 3, 100, 99, 98];
      const k = 3;
      const expected = [3, 6, 9, 300, 297, 294];

      // when
      const result = solution.transformArrayBasedOnK(arr, k);

      // then
      expect(result).toStrictEqual(expected);
    });

    it('k가 짝수라면 모든 원소에 k를 더한다.', () => {
      // given
      const arr = [1, 2, 3, 100, 99, 98];
      const k = 2;
      const expected = [3, 4, 5, 102, 101, 100];

      // when
      const result = solution.transformArrayBasedOnK(arr, k);

      // then
      expect(result).toStrictEqual(expected);
    });
  });
});
