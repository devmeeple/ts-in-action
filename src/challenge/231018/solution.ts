export const solution = {
  stringConvertInteger(n_str: string) {
    return +n_str;
  },
  countUp(start_num: number, end_num: number) {
    const result: number[] = [];
    for (let i = start_num; i <= end_num; i++) {
      result.push(i);
    }
    return result;
  },
  differentValueOnFlag(a: number, b: number, flag: boolean) {
    return flag ? a + b : a - b;
  },
  stringMultiply(my_string: string, k: number) {
    return my_string.repeat(k);
  },
};
