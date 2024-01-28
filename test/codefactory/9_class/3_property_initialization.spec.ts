class Hansot {
  // 생성자 초기화
  name: string;
  // 초기값 제공
  price: number = 0;
  // optional
  menu?: string;

  constructor(name: string, menu?: string) {
    this.name = name;
    this.menu = menu;
  }
}

class RouteStack {
  // stack은 null, undefined가 될 수 없다.
  stack!: string[];

  constructor() {
    this.initialize();
  }

  initialize() {
    this.stack = [];
  }
}

describe('프로퍼티 초기화', () => {
  it('생성자로 초기화', () => {
    // given
    const hansot = new Hansot('빅치킨마요');

    // then
    expect(hansot.name).toEqual('빅치킨마요');
  });

  it('필드로 초기화', () => {
    // given
    const hansot = new Hansot('치킨마요');

    // when
    hansot.price = 4400;

    expect(hansot.name).toEqual('치킨마요');
    expect(hansot.price).toEqual(4400);
    expect(hansot.menu).toBeUndefined();
  });

  it('Non-null assertion operator', () => {
    // given
    const routeStack = new RouteStack();

    // then
    expect(routeStack.stack).toBeDefined();
    expect(routeStack.stack).toEqual([]);
  });
});
