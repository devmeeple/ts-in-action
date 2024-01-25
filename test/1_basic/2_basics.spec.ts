describe('타입스크립트 기본타입', () => {
  it('타입을 명시해서 선언했을 때 다른 타입의 값으로 변경이 불가능하다. ', () => {
    // given
    const helloText: string = 'Hello';

    // then
    expect(typeof helloText).toBe('string');
  });
});
