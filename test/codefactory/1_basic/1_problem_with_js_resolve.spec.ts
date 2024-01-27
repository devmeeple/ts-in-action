describe('자바스크립트의 문제 보완하기: 타입스크립트', () => {
  it('', () => {
    // given
    const add = (num1: number, num2: number) => {
      return num1 + num2;
    };

    // when

    // then
    expect(add(1, 2)).toBe(3);
    // expect(add(1, '2')).toBe(3); TS2345: Argument of type 'string' is not assignable to parameter of type 'number'. 함수가 실행조차 되지 않는다. (컴파일이 되지 않기 때문에)
  });
});
