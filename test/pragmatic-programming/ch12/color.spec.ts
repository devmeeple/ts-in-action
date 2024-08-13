import { Color } from '../../../src/pragmatic-programming/ch12/color';

describe('Color', () => {
  it('유효한 값이 입력될 경우 Color 객체를 반환한다', () => {
    // given
    const r = 100;
    const g = 150;
    const b = 200;

    // when
    const sut = new Color(r, g, b);

    // then
    expect(sut.r).toEqual(100);
    expect(sut.g).toEqual(150);
    expect(sut.b).toEqual(200);
  });

  it('유효하지 않은 값을 입력하면 에러가 발생한다', () => {
    // given
    const r = 150;
    const g = -10;
    const b = 300;

    // when & then
    expect(() => new Color(r, g, b)).toThrow(Error);
  });

  it('hex 코드 변환 값을 반환한다', () => {
    // given
    const color = new Color(255, 128, 0);

    // when
    const sut = color.toHex();

    // then
    expect(sut).toEqual('#ff8000');
  });
});
