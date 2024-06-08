import { ArrayUtil } from './ArrayUtil';

describe('배열 비교하기', () => {
  it('arr2의 배열길이가 크다면 -1을 반환한다', () => {
    // given
    const arr1 = [49, 13];
    const arr2 = [70, 11, 2];

    // when
    const act = ArrayUtil.compareLength(arr1, arr2);

    // then
    expect(act).toBe(-1);
  });

  it('arr1의 배열길이가 크다면 1을 반환한다', () => {
    // given
    const arr1 = [100, 17, 84, 1];
    const arr2 = [55, 12, 65];

    // when
    const act = ArrayUtil.compareLength(arr1, arr2);

    // then
    expect(act).toBe(1);
  });

  describe('두 배열의 길이가 같을 때 총합을 비교한다', () => {
    it('같다면 0을 반환한다', () => {
      // given
      const arr1 = [1, 2, 3, 4, 5];
      const arr2 = [3, 3, 3, 3, 3];

      // when
      const act = ArrayUtil.compareLength(arr1, arr2);

      // then
      expect(act).toBe(0);
    });

    it('arr1이 더 크다면 1을 반환한다', () => {
      // given
      const arr1 = [6, 7, 8, 9, 10];
      const arr2 = [1, 2, 3, 4, 5];

      // when
      const act = ArrayUtil.compareLength(arr1, arr2);

      // then
      expect(act).toBe(1);
    });

    it('arr2가 더 크다면 -1을 반환한다', () => {
      // given
      const arr1 = [1, 2, 3, 4, 5];
      const arr2 = [6, 7, 8, 9, 10];

      // when
      const act = ArrayUtil.compareLength(arr1, arr2);

      // then
      expect(act).toBe(-1);
    });
  });
});
