import { Food } from './food';

export class Order {
  constructor(
    private _foods: Food[],
    private _transactionFeePercent = 0.03, // 결제 수수료 3%
  ) {}

  get foods(): Food[] {
    return this._foods;
  }

  get transactionFeePercent(): number {
    return this._transactionFeePercent;
  }
}
