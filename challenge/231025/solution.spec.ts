import {solution} from "./solution";

describe('231025 문제풀이', () => {
    describe('첫 번째로 나오는 음수', () => {
        it.each([
            { num_list: [12, 4, 15, 46, 38, -2, 15]	, expected: 5 },
            { num_list: [13, 22, 53, 24, 15, 6] , expected: -1 },
        ])
        ('$num_list는 $expected를 반환', ({ num_list, expected}) => {
            expect(solution.findFirstNavigateIndex(num_list)).toStrictEqual(expected);
        });
    });

    describe('수 조작하기1', () => {
        it.each([
            { n: 0, control: 'wsdawsdassw', expected: -1 },
        ])('가장 마지막에 나오는 n의 값은 $expected', ({ n, control, expected}) => {
            expect(solution.manipulateNumberByControlString(n, control)).toBe(expected);
        });
    });

    describe('배열 만들기 1', () => {
        it.each([
            { n: 10, k: 3, expected: [3, 6, 9] },
            { n: 15, k: 5, expected: [5, 10, 15] },
        ])
        ('1이상 $n 이하의 정수 중에서 $k의 배수를 오름차순으로 저장한 배열 $expected', ({ n, k, expected }) => {
            expect(solution.getMultiplesOfKUpToN(n, k)).toStrictEqual(expected);
        });
    });

    describe('문자열 정수의 합', () => {
        it.each([
            {num_str: '123456789', expected: 45},
            {num_str: '1000000', expected: 1},
        ])
        ('문자열안의 모든 숫자를 더하면 $expected', ({ num_str, expected}) => {
            expect(solution.sumOfStringIntegers(num_str)).toStrictEqual(expected);
        });
    });
});