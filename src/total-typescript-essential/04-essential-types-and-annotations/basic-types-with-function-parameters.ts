export const add = (a: number, b: number) => {
  return a + b;
};

const result = add(1, 2);

const concatTwoStrings = (a: string, b: string) => {
  return [a, b].join(' ');
};

export const example1: string = 'Hello World!';
export const example2: number = 42;
export const example3: boolean = true;
export const example4: symbol = Symbol();
export const example5: bigint = 123n;
