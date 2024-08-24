class Money {
  private readonly value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static of(value: number) {
    if (value < 0) {
      throw new Error('돈은 0원 이상이어야 합니다.');
    }
    return new Money(value);
  }
}

describe('MoneyTest', () => {
  it('[정적 팩토리 메서드] 0 이하를 입력하면 객체를 생성할 수 없다. [실패]', () => {
    // given

    // when

    // then
    expect(() => Money.of(-1000)).toThrow(Error);
  });
});
