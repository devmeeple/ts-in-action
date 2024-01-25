export const solution = {
  sumUntilExceedsN(numbers: number[], n: number) {
    // reduce 활용해서 문제풀어보기
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
      if (sum > n) break;
    }
    return sum;
  },
  divideBlank(my_string: string) {
    return my_string.split(' ');
  },
  convertStringArray(strArr: string[]) {
    return strArr.map((value, index) =>
      index % 2 === 0 ? value.toLowerCase() : value.toUpperCase(),
    );
  },
  getElementsAtIntervals(num_list: number[], n: number) {
    return num_list.filter((_, index) => index % n === 0);
  },
};
