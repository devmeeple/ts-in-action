export const solution = {
  emptyAverage(numbers: number[]) {
    let sum = 0;
    numbers.forEach((num) => {
      sum += num;
    });
    return sum / numbers.length;
  },
  reverseArray(num_list: number[]) {
    return num_list.reverse();
  },
  sliceArray(numbers: number[], num1: number, num2: number) {
    return numbers.slice(num1, num2 + 1);
  },
  countElement(array: number[], n: number) {
    return array.filter((value) => value === n).length;
  },
};
