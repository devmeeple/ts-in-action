/**
 * canAfford: 구매 가능여부를 확인한다
 * withdraw: 구매한다
 */
export class Account {
  constructor(private _money: number) {}

  canAfford(amount: number) {
    return this._money >= amount;
  }

  withdraw(amount: number) {
    this._money -= amount;
  }

  get money(): number {
    return this._money;
  }
}
