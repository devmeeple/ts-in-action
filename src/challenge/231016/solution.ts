export const solution = {
    division: (num1: number, num2: number) => Math.trunc((num1 / num2) * 1000),
    compare: (num1: number, num2: number) => (num1 === num2) ? 1 : -1,
    doubling: (numbers: number[]) => numbers.map((v) => v * 2),
};