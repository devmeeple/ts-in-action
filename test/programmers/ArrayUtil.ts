/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/181856
 * 배열 비교하기
 */
export class ArrayUtil {
  static compareLength(arr1: number[], arr2: number[]) {
    if (arr1.length !== arr2.length) {
      return this.compareValue(arr1.length, arr2.length);
    }

    const totalOfArr1 = this.sumOfArray(arr1);
    const totalOfArr2 = this.sumOfArray(arr2);

    if (totalOfArr1 !== totalOfArr2) {
      return this.compareValue(totalOfArr1, totalOfArr2);
    }

    return ComparisonResult.Equal;
  }

  private static sumOfArray(arr: number[]) {
    return arr.reduce((acc, cur) => acc + cur, 0);
  }

  private static compareValue(value1: number, value2: number) {
    return value1 > value2 ? ComparisonResult.Greater : ComparisonResult.Less;
  }
}

export enum ComparisonResult {
  Less = -1,
  Equal = 0,
  Greater = 1,
}
