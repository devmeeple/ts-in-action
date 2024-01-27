class BoardGame {
  readonly title: string;

  private constructor(title: string) {
    this.title = title;
  }

  static of(title: string): BoardGame {
    return new BoardGame(title);
  }
}

describe('Readonly', () => {
  it('readonly로 선언된 프로퍼티는 재할당이 금지된다 ', () => {
    // given
    const boardGame = BoardGame.of('타르기');

    // then 컴파일러에서 에러를 잡아서 실제로 동작하지 않는 코드지만 이런 느낌이다
    // expect(() => (boardGame.title = '버밍엄')).toThrow();
  });
});
