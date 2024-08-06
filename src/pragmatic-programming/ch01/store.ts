import { Order } from './order';

export class Store {
  constructor(
    private _orders: Order[],
    private _rentalFee: number, // 임대료
  ) {}

  get orders(): Order[] {
    return this._orders;
  }

  get rentalFee(): number {
    return this._rentalFee;
  }
}
