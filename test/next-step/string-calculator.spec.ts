class StringCalculator {
  add(str: string) {
    const numbers = str.split(',').map(Number);
    // 리듀서(acc: 누적값, curr: 현재값) { 반환 값 }, acc 의 초기
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
}

describe('StringCalculatorTest', () => {
  let cal: StringCalculator;

  beforeEach(() => {
    cal = new StringCalculator();
  });

  describe('쉼표를 구분자로 지정한 문자열의 합 반환', () => {
    it('빈 문자열은 0을 반환', () => {
      expect(cal.add('')).toEqual(0);
    });

    it('문자열 1,2 는 3을 반환', () => {
      expect(cal.add('1,2')).toEqual(3);
    });

    it('문자열 1,2,3 은 6을 반환', () => {
      expect(cal.add('1,2,3')).toEqual(6);
    });
  });

  it.todo('쉼표를 구분자로 가지는 문자열을 전달하는 경우');
  it.todo('구분자를 기준으로 분리한 각 숫자의 합을 반환');
  it.todo('커스텀 구분자를 지정');
  it.todo('음수를 전달하는 경우 에러가 발생한다');
});
