import { Calculator } from '../../../src/pragmatic-programming/ch12/calculator';

describe('Calculator', () => {
  it('두 수의 덧셈을 반환한다', () => {
    // given
    const calculator = new Calculator();
    const a = 10;
    const b = 20;

    // when
    const sut = calculator.add(a, b);

    // then
    expect(sut).toEqual(30);
  });
});
