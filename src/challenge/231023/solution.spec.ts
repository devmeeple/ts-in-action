import {solution} from "./solution";

describe('231023 문제풀이', () => {
    describe('대문자로 바꾸기', () => {
        it.each([
            { myString: 'aBcDeFg', expected: 'ABCDEFG' },
            { myString: 'AAA', expected: 'AAA' },
        ])
        ('$myString의 결과는 $expected', ({ myString, expected}) => {
            expect(solution.toUpperCase(myString)).toBe(expected);
        });
    });

    describe('짝수는 싫어요', () => {
        it.each([
            { n: 10, expected: [1, 3, 5, 7, 9]},
            { n: 15, expected: [1, 3, 5, 7, 9, 11, 13, 15]}
        ])
        ('$n이하의 홀수가 오름차순으로 담긴 배열 $expected', ({ n, expected}) => {
            expect(solution.getOddsUpToN(n)).toStrictEqual(expected);
        });
    });

    describe('세균 증식', () => {
        it.each([
            { n: 2, t: 10, expected: 2048},
            { n: 7, t: 15, expected: 229376 },
        ])('세균 $n마리는 $t시간 후 $expected ', ({n, t, expected}) => {
            expect(solution.multiplyBacteria(n, t)).toStrictEqual(expected);
        });
    });

    describe('카운트 다운', () => {
        it.each([
            { start_num: 10, end_num: 3 , expected: [10, 9, 8, 7, 6, 5, 4, 3]},
        ])('$start_num부터 $end_num까지 1씩 감소하는 수를 담은 리스트는 $expected ', ({ start_num, end_num, expected}) => {
            expect(solution.countDown(start_num, end_num)).toStrictEqual(expected);
        });
    });
});