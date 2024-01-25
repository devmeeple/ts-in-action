describe('자바스크립트의 문제점', () => {
  it('매개변수 타입을 지정하지 않았을 때 발생할 수 있는 문제', () => {
    // given
    const add = (var1, var2) => {
      return var1 + var2;
    };

    // when

    // then
    expect(add(1, 2)).toBe(3);
    expect(add(1, '2')).not.toBe(3);
    expect(add('1', '2')).toBe('12');
  });

  it('타입을 지정했을 때 장점', () => {
    // given
    const addTypeSafe = (num1, num2) => {
      if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
      } else {
        throw new Error('숫자만 입력해주세요');
      }
    };

    // then
    expect(addTypeSafe(1, 2)).toBe(3);
    expect(() => addTypeSafe('1', '2')).toThrow(
      new Error('숫자만 입력해주세요'),
    );
  });
});
