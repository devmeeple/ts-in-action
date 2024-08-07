export class Product {
  constructor(
    private _name: string,
    private _price: number,
  ) {}

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }
}
