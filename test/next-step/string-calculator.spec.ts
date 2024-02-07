class StringCalculator {
  add(str: string) {
    // 정규표현식을 사용하여 구분자 추가
    const regex = /[,:]/;
    const numbers = str.split(regex).map(Number);
    // 리듀서(acc: 누적값, curr: 현재값) { 반환 값 }, acc 의 초기
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
}

describe('StringCalculatorTest', () => {
  let cal: StringCalculator;

  beforeEach(() => {
    cal = new StringCalculator();
  });

  describe('쉼표와 콜론을 구분자로 지정한 문자열의 합을 반환한다', () => {
    it('빈 문자열은 0을 반환', () => {
      expect(cal.add('')).toEqual(0);
    });

    it.each([
      ['1,2', 3],
      ['1,2,3', 6],
      ['1,2:3', 6],
    ])('문자열 %s의 결과는 %d', (str, expected) => {
      expect(cal.add(str)).toBe(expected);
    });
  });

  it.todo('커스텀 구분자를 지정');
  it.todo('음수를 전달하는 경우 에러가 발생한다');
});
