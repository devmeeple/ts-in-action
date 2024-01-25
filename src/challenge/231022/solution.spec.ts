import {solution} from "./solution";

describe('231022 문제풀이', () => {
    describe('머쓱이보다 키 큰 사람', () => {
        it.each([
            { array: [149, 180, 192, 170], height: 167, expected: 3 },
            { array: [180, 120, 140], height: 190, expected: 0},
        ])
        ('$array중 $height보다 큰 사람은 $expected', ({array, height, expected}) => {
            expect(solution.countTallerThan(array, height)).toBe(expected);
        });
    });

    describe('아이스 아메리카노', () => {
        it.each([
            { money: 5500, expected: [1, 0] },
            { money: 15000, expected: [2, 4000] },
        ])
        ('$money 아메리카노 $expected ', ({money, expected}) => {
            expect(solution.calculateMaxAmericanoAndRemainingMoney(money)).toStrictEqual(expected);
        });
    });

    describe('피자 나눠 먹기 (1)', () => {
        it.each([
            { n: 7, expected: 1 },
            { n: 1, expected: 1 },
            { n: 15, expected: 3 },
        ])
        ('$n명이 이 피자를 최소 한 조각 이상 먹기 위해 필요한 피자: $expected판', ({ n, expected}) => {
            expect(solution.sharePizza(n)).toBe(expected);
        });
    });

    describe('배열 원소의 길이', () => {
        it.each([
            { strlist: ['We', 'are', 'the', 'world!'], expected: [2, 3, 3, 6 ], },
            { strlist: ['I', 'Love', 'Programmers.'], expected: [1, 4, 12 ]},
        ])
        ('$strlist는 $expected', ({strlist, expected}) => {
            expect(solution.mapStringLengths(strlist)).toStrictEqual(expected);
        });
    });
});