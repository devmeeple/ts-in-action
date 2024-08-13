/**
 * RGB 색 모델에서 색상을 표현하는 클래스
 * 클래스의 인스턴스는 초기화 된 이후에 변경할 수 없다.
 */
export class Color {
  private readonly _r: number;
  private readonly _g: number;
  private readonly _b: number;

  /**
   * Color 클래스의 생성자. RGB에 대응하는 값을 입력하고 인스턴스를 초기화 한다.
   *
   * @param {number} r - Red (0이상 255 이하 값)
   * @param {number} g - Green (0이상 255 이하 값)
   * @param {number} b - Blue (0이상 255 이하 값)
   * @throws {Error} 입력한 값이 지정한 범위를 벗어날 경우 에러가 발생한다.
   */
  constructor(r: number, g: number, b: number) {
    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
      throw new Error('RGB는 0 ~ 255 사이의 값이어야 한다');
    }
    this._r = r;
    this._g = g;
    this._b = b;
  }

  /**
   * 색상을 16진수 형식으로 변환한다.
   *
   * @returns {string} 색상의 16진수 표현인 '#RRGGBB' 형식으로 값을 반환한다.
   */
  toHex(): string {
    const hex = 16;
    const rHex = this.r.toString(hex).padStart(2, '0');
    const gHex = this.g.toString(hex).padStart(2, '0');
    const bHex = this.b.toString(hex).padStart(2, '0');
    return `#${rHex}${gHex}${bHex}`;
  }

  get r(): number {
    return this._r;
  }

  get g(): number {
    return this._g;
  }

  get b(): number {
    return this._b;
  }
}
