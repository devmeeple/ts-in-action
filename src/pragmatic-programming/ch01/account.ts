export class Account {
  constructor(private _money: number) {}

  get money(): number {
    return this._money;
  }

  set money(value: number) {
    this._money = value;
  }
}
