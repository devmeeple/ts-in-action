import {solution} from "./solution";

describe('231016 문제풀이', () => {

    describe('두 수의 나눗셈', () => {
        it('두 수를 나눈 값에 1,000을 곱한 후 정수 부분을 return 하라.', () => {
            expect(solution.division(3, 2)).toBe(1500);
            expect(solution.division(7, 3)).toBe(2333);
            expect(solution.division(1, 16)).toBe(62);
        });
    });

    describe('숫자 비교하기', () => {
        it('두 수가 같으면 1을 반환', () => {
            expect(solution.compare(1, 1)).toBe(1);
        });

        it('두 수가 다르면 -1을 반환', () => {
            expect(solution.compare(2, 3)).toBe(-1);
            expect(solution.compare(7, 99)).toBe(-1);
        });
    });

    describe('배열 두배 만들기', () => {
        const numbers = [1, 2, 3, 4, 5];
        const expected = [2, 4, 6, 8, 10];
        it('각 원소의 두배한 원소를 가진 배열을 반환', () => {
            expect(solution.doubling(numbers)).toEqual(expected);
        });
    });

    /*
    describe('분수의 덧셈', () => {
        // 유클리드 호제법으로 문제를 해결해야 한다.
    });
    */
});