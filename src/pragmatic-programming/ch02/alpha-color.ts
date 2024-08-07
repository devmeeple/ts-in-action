import { Color } from './color';

export class AlphaColor extends Color {
  public a: number;

  constructor(r: number, g: number, b: number, a: number) {
    super(r, g, b);
    this.a = a;
  }
}
