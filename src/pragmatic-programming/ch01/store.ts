import { Order } from './order';

export class Store {
  constructor(
    private orders: Order[],
    private rentalFee: number, // 임대료
  ) {}

  calculateRevenue() {
    let revenue = 0;
    for (const order of this.orders) {
      revenue += order.calculateRevenue();
    }
    return revenue;
  }

  calculateProfit() {
    let income = 0; // 수입
    for (const order of this.orders) {
      income += order.calculateProfit();
    }
    return income - this.rentalFee;
  }
}
