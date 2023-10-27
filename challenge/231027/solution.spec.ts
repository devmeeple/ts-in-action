import {solution} from "./solution";

describe('231027 문제풀이', () => {
    describe('점의 위치 구하기', () => {
        it.each([
            { dot: [2, 4], expected: 1, },
            { dot: [-7, 9], expected: 2, },
        ])('$dot은 $expected 사분면이다. ', ({ dot, expected}) => {
            expect(solution.findPosition(dot)).toStrictEqual(expected);
        });
    });

    describe('문자열안에 문자열', () => {
        it.each([
            { str1: 'ab6CDE443fgh22iJKlmn1o', str2: '6CD', expected: 1, },
            { str1: 'ppprrrogrammers', str2: 'pppp', expected: 2, },
            { str1: 'AbcAbcA', str2: 'AAA', expected: 2, },
        ])('있다면 1, 없으면 2 결과는 $expected ', ({ str1, str2, expected}) => {
            expect(solution.isSubstringContained(str1, str2)).toStrictEqual(expected);
        });
    });

    describe('피자 나눠 먹기 (3)', () => {
        it.each([
            { slice: 7, n: 10, expected: 2},
            { slice: 4, n: 12, expected: 3},
        ])
        ('$n명이 $slice조각으로 자른 피자를 먹기 위해서는 $expected판이 필요하다.', ({ slice, n, expected}) => {
            expect(solution.calculateMinimumPizzasNeeded(slice, n)).toStrictEqual(expected);
        });
    });

    describe('삼각형의 완성조건 (1) ', () => {
        it.each([
            { sides: [1, 2, 3], expected: 2 },
            { sides: [3, 6, 2], expected: 2 },
            { sides: [199, 72, 222], expected: 1 },
        ])
        ('삼각형을 완성할 수 있다면 1, 없다면 2 결과: $expected', ({ sides, expected}) => {
            expect(solution.isTrianglePossible(sides)).toStrictEqual(expected);
        });
    });
});