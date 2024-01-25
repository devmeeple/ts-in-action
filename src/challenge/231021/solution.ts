export const solution = {
  conversionLowerCase(myString: string) {
    return myString.toLowerCase();
  },
  commonMultiple(number: number, n: number, m: number) {
    if (number % n === 0 && number % m === 0) {
      return 1;
    }
    return 0;
  },
  getFirstNCharacter(my_string: string, n: number) {
    return my_string.slice(0, n);
  },
  convertSpecificCharToUpperCase(my_string: string, alp: string) {
    return my_string
      .split('')
      .map((char) => (char === alp ? char.toUpperCase() : char))
      .join('');
  },
};
