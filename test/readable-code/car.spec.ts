/**
 * 정적 팩토리 메서드를 작성할 땐 생성자를 사용해서 객체를 만들 수 없도록 private 선언한다.
 *
 * 네이밍 컨벤션
 * 1. from: 하나의 매개변수를 받아서 객체 생성
 * 2. of: 여러 매개변수를 받아서 객체 생성
 */

class Car {
  private constructor(
    private readonly brand: string,
    private readonly _color: string,
  ) {}

  static brandBlackFrom(brand: string) {
    return new Car(brand, '블랙');
  }

  static brandColorOf(brand: string, color: string) {
    return new Car(brand, color);
  }

  get color(): string {
    return this._color;
  }
}

describe('CarTest', () => {
  it('매개변수 하나는 from 메서드를 사용한다.', () => {
    // given
    const teslaCar = Car.brandBlackFrom('테슬라');

    // when

    // then
    expect(teslaCar).toBeInstanceOf(Car);
    expect(teslaCar.color).toBe('블랙');
  });

  it('매개변수 여러개는 of 메서드를 사용한다.', () => {
    // given
    const bmwRedCar = Car.brandColorOf('BMW', '빨간색');

    // when

    // then
    expect(bmwRedCar).toBeInstanceOf(Car);
    expect(bmwRedCar.color).toBe('빨간색');
  });
});
