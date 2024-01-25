import { solution } from './solution';

/**
 * 1. 짝수의 합: 의미없이 한번 작동하는 것 같고 깊어서 신경쓰인다. 개선필요
 * 2. 각도기: 코드가 너무 길다. 개선필요
 * 3. 양꼬치: 꽤나 고민했다. Math.max 를 사용한 예외케이스 방지가 신선했다. toLocalString 유용해 보인다.
 * 4. 편지: 쉬었다. 문제풀이 방법에 흥미를 느꼈다.
 */
describe('231017 문제풀이', () => {
  it('짝수의 합', () => {
    expect(solution.sumEvenNumber(10)).toEqual(30);
    expect(solution.sumEvenNumber(4)).toEqual(6);
  });

  it('각도기, ', () => {
    expect(solution.measure(70)).toEqual(1);
    expect(solution.measure(91)).toEqual(3);
    expect(solution.measure(180)).toEqual(4);
  });

  it('양꼬치', () => {
    expect(solution.sumPrice(10, 3)).toBe('124,000');
    expect(solution.sumPrice(64, 6)).toBe('768,000');
  });

  it('편지', () => {
    expect(solution.writeLetter('happy birthday!')).toBe(30);
    expect(solution.writeLetter('I love you~')).toBe(22);
  });
});
