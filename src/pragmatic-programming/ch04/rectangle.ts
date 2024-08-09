export class Rectangle {
  constructor(
    protected _width: number,
    protected _height: number,
  ) {}

  calculateArea() {
    return this._width * this._height;
  }

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }
}
