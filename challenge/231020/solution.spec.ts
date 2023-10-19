import {solution} from "./solution";

describe('231020 문제풀이', () => {
    describe('n 번째 원소까지', () => {
        it.each([
            { num_list: [2, 1, 6], n: 1, expected: [2] },
            { num_list: [5, 2, 1, 7, 5], n: 3, expected: [5, 2, 1]},
        ])
        ('num_list의 첫 번째 원소부터 n번째 원소까지의 모든 원소를 return', ({num_list, n, expected}) => {
            expect(solution.getFirstNElements(num_list, n)).toStrictEqual(expected);
        });
    });

    describe('주사위 게임1', () => {
        it.each([
            [3, 5, 34, 'a와 b가 모두 홀수라면, a^2 + b^2 점을 얻음'],
            [6, 1, 14, 'a와 b 중 하나만 홀수라면, 2 * (a + b) 점을 얻음'],
            [2, 4, 2, 'a와 b 모두 홀수가 아니라면 |a - b| 점을 얻음']
        ])('%s와 %s일 때 %s점을 얻음: %s', (a, b, expected, description) => {
            expect(solution.diceGame(a, b)).toStrictEqual(expected);
        });
    });

    describe('짝수 홀수 개수', () => {
        it.each([
            { num_list: [1, 2, 3, 4, 5], expected: [2, 3] },
            { num_list: [1, 3, 5, 7], expected: [0, 4] },
        ])
        ('짝수와 홀수의 개수를 담은 배열을 return', ({ num_list, expected }) => {
            expect(solution.countEvenAndOdd(num_list)).toStrictEqual(expected);
        });
    });

    describe('문자열 뒤집기', () => {
        it.each([
            { my_string: 'jaron', expected: 'noraj' },
            { my_string: 'bread', expected: 'daerb' },
        ])
        ('문자열을 거꾸로 뒤집은 문자열을 return', () => {
            const my_string = 'jaron';
            const expected = 'noraj';
            expect(solution.reverseString(my_string)).toBe(expected);
        });
    });
});