class Money {
  private value: number;

  constructor(value: number) {
    if (value < 0) {
      throw new Error('돈은 0원 이상이어야 합니다.');
    }
    this.value = value;
  }
}

describe('MoneyTest', () => {
  it('[생성자] 0 이하를 입력하면 객체를 생성할 수 없다. [실패]', () => {
    // given

    // when

    // then
    expect(() => new Money(-1000)).toThrow(Error);
  });
});
