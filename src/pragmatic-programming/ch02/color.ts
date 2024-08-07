export class Color {
  constructor(
    public readonly r: number,
    public readonly g: number,
    public readonly b: number,
  ) {}

  randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return new Color(r, g, b);
  }
}
