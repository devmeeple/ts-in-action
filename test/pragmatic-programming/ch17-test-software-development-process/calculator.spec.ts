class Calculator {
  static subAtoB(a: number, b: number) {
    return ((a + b) * (b - a + 1)) / 2;
  }
}

describe('CalculatorTest', () => {
  it('a부터 b까지 숫자를 모두 더한 값을 반환한다', () => {
    // given
    const a = 1;
    const b = 100;

    // when
    const sut = Calculator.subAtoB(a, b);

    // then
    expect(sut).toBe(5050);
  });
});
