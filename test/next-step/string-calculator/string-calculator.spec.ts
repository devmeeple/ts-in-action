import { StringCalculator } from '../../../src/next-step/string-calculator/string-calculator';

describe('StringCalculatorTest', () => {
  let cal: StringCalculator;

  beforeEach(() => {
    cal = new StringCalculator();
  });

  it('빈 문자열은 0을 반환', () => {
    expect(cal.add('')).toEqual(0);
    expect(cal.add('    ')).toEqual(0);
    expect(cal.add(null)).toEqual(0);
  });

  it('쉼표와 콜론을 구분자로 지정한 문자열의 합을 반환한다', () => {
    expect(cal.add('1,2')).toEqual(3);
    expect(cal.add('1,2,3')).toEqual(6);
    expect(cal.add('1,2:3')).toEqual(6);
  });

  it('커스텀 구분자를 정의한다', () => {
    expect(cal.add('//;\n1;2;3')).toEqual(6);
    expect(cal.add('//!\n1!2!3!4')).toEqual(10);
  });

  it('음수를 전달하는 경우 에러가 발생한다', () => {
    expect(() => cal.add('-1,2,3')).toThrow(
      new Error('음수를 입력할 수 없습니다. 숫자: -1'),
    );
    expect(() => cal.add('1,-2,-3')).toThrow(
      new Error('음수를 입력할 수 없습니다. 숫자: -2, -3'),
    );
  });
});
