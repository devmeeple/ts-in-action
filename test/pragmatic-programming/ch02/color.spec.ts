import { Color } from '../../../src/pragmatic-programming/ch02/color';

describe('Color', () => {
  it('[readonly: 불변성] 한번 생성된 r, g, b 값은 변하지 않는다', () => {
    // given
    const color = new Color(0, 100, 255);

    // when

    // then
    expect(color.r).toEqual(0);
    expect(color.g).toEqual(100);
    expect(color.b).toEqual(255);
  });
});
