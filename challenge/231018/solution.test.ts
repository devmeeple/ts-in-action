import {solution} from "./solution";

describe('231018 문제풀이', () => {
    it('문자열을 정수로 변환하기', () => {
        expect(solution.stringConvertInteger('10')).toEqual(10);
        expect(solution.stringConvertInteger('8542')).toEqual(8542);
    });

    it('카운트 업 ', () => {
        const result = [3, 4, 5, 6, 7, 8, 9, 10];
        expect(solution.countUp(3, 10)).toStrictEqual(result);
    });

    it('flag에 따라 다른 값 반환하기 ', () => {
        expect(solution.differentValueOnFlag(-4, 7, true)).toEqual(3);
        expect(solution.differentValueOnFlag(-4, 7, false)).toEqual(-11);
    });

    it('문자열 곱하기', () => {
        expect(solution.stringMultiply('string', 3)).toBe('stringstringstring');
    });
});