import { colorCode, COLORS } from '../../src/exercism/resistor-color';

describe('color code', () => {
  it('Black 값은 0이다', () => {
    // given
    const black = 'black';

    // when
    const sut = colorCode(black);

    // then
    expect(sut).toEqual(0);
  });

  it('White 값은 9다', () => {
    // given
    const white = 'white';

    // when
    const sut = colorCode(white);

    // then
    expect(sut).toEqual(9);
  });

  it('Orange 값은 3이다', () => {
    // given
    const orange = 'orange';

    // when
    const sut = colorCode(orange);

    // then
    expect(sut).toEqual(3);
  });
});

describe('Colors', () => {
  it('색상 전부를 반환한다', () => {
    // given & when & then
    expect(COLORS).toEqual([
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
    ]);
  });
});
