import { solution } from './231029_solution';

describe('231029 문제풀이', () => {
  describe('n보다 커질 때까지 더하기', () => {
    it.each([
      { numbers: [34, 5, 71, 29, 100, 34], n: 123, expected: 139 },
      { numbers: [58, 44, 27, 10, 100], n: 139, expected: 239 },
    ])(
      '원소들의 합이 n보다 커지는 순간 반환한다.',
      ({ numbers, n, expected }) => {
        // given

        // when
        const result = solution.sumUntilExceedsN(numbers, n);
        // then
        expect(result).toStrictEqual(expected);
      },
    );
  });

  describe('n개 간격의 원소들', () => {
    it('첫번째 원소부터 n개 간격의 원소를 반환한다.', () => {
      // given
      const num_list = [4, 2, 6, 1, 7, 6];
      const n = 2;
      const expected = [4, 6, 7];

      // when
      const result = solution.getElementsAtIntervals(num_list, n);

      // then
      expect(result).toStrictEqual(expected);
    });
  });

  describe('공백으로 구분하기 1', () => {
    it.each([
      { my_string: 'i love you', expected: ['i', 'love', 'you'] },
      { my_string: 'programmers', expected: ['programmers'] },
    ])(
      '$my_string에 나온 단어를 앞에서부터 순서대로 담은 베열을 반환한다.',
      ({ my_string, expected }) => {
        // given

        // when
        const result = solution.divideBlank(my_string);

        // then
        expect(result).toStrictEqual(expected);
      },
    );
  });

  describe('배열에서 문자열 대소문자 변환하기', () => {
    it('홀수번째 인덱스의 문자열은 모든 문자를 대문자로 만든다.', () => {
      // given
      const strArr = ['aBc', 'AbC'];
      const expected = ['abc', 'ABC'];

      // when
      const result = solution.convertStringArray(strArr);

      // then
      expect(result).toStrictEqual(expected);
    });

    it('짝수번째 인덱스의 문자열은 모든 문자를 소문자로 만든다.', () => {
      // given
      const strArr = ['AAA', 'BBB', 'CCC', 'DDD'];
      const expected = ['aaa', 'BBB', 'ccc', 'DDD'];

      // when
      const result = solution.convertStringArray(expected);

      // then
      expect(result).toStrictEqual(expected);
    });
  });
});
