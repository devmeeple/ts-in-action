export class Food {
  constructor(
    private _price: number,
    private _originCost: number, // 원가
  ) {}

  get price(): number {
    return this._price;
  }

  get originCost(): number {
    return this._originCost;
  }
}
