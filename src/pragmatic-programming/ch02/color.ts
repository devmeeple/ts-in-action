/**
 * 한번 생성된 Color 인스턴스의 r,g,b 값은 변하지 않는다
 */
export class Color {
  constructor(
    public readonly r: number,
    public readonly g: number,
    public readonly b: number,
  ) {}
}
