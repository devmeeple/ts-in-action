import {solution} from "./solution";

describe('231019 문제풀이', () => {
    describe('배열의 평균값', () => {
        it('input의 결과는 5.5', () => {
            const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            const expected = 5.5;
            expect(solution.emptyAverage(input)).toBe(expected);
        });

        it('input의 결과는 94.0 ', () => {
            const input = [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
            const expected = 94.0;
            expect(solution.emptyAverage(input)).toBe(expected);
        });
    });

    describe('배열 뒤집기', () => {
        it.each([
            { input: [1, 2, 3, 4, 5], expected: [5, 4, 3, 2, 1]},
            { input: [1, 1, 1, 1, 1, 2], expected: [2, 1, 1, 1, 1, 1]},
            { input: [1, 0, 1, 1, 1, 3, 5], expected: [5, 3, 1, 1, 1, 0, 1]},
        ])('원소의 순서를 거꾸로 뒤집은 배열을 return 하라 ', ({input, expected}) => {
            expect(solution.reverseArray(input)).toStrictEqual(expected);
        });
    });

    describe('배열 자르기', () => {
        it.each([
            { numbers: [1, 2, 3, 4, 5], num1: 1, num2: 3, expected: [2, 3, 4] },
            { numbers: [1, 3, 5] , num1: 1, num2: 2, expected: [3, 5] },
        ])
        ('numbers의 num1 인덱스부터, num2 인덱스 까지 자른 정수 배열 return', ({ numbers, num1, num2, expected }) => {
            expect(solution.sliceArray(numbers, num1, num2)).toStrictEqual(expected);
        });
    });

    describe('중복된 숫자 개수', () => {
        it.each([
            { array: [1, 1, 2, 3, 4, 5]	, n: 1, expected: 2 },
            { array: [0, 2, 3, 4] , n: 1, expected: 0 },
        ])
        ('array에 n이 몇 개 있는지를 return', ({ array, n, expected}) => {
            expect(solution.countElement(array, n)).toBe(expected);
        });
    });
});