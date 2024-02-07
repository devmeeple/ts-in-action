class StringCalculator {
  add(text: string) {
    // 정규표현식을 사용하여 구분자 추가
    const regex = /[,:]/;
    const numbers = text.split(regex).map(Number);

    this.validateNonNegativeNumbers(numbers);

    // 리듀서(acc: 누적값, curr: 현재값) { 반환 값 }, acc 의 초기
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }

  /**
   * 문자열의 값에 음수가 없는지 확인
   */
  private validateNonNegativeNumbers(numbers: number[]) {
    const negativeNumbers = numbers.filter((n) => n < 0);
    if (negativeNumbers.length > 0) {
      throw new Error('음수를 입력할 수 없습니다');
    }
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
  it('음수를 전달하는 경우 에러가 발생한다', () => {
    expect(() => cal.add('-1,2,3')).toThrow(
      new Error('음수를 입력할 수 없습니다'),
    );
  });
});
