import { Calculable } from './calculable.interface';

export class Order implements Calculable {
  private transactionFeePercent = 0.03; // 결제 수수료 3%

  constructor(private items: Calculable[]) {}

  calculateRevenue() {
    let revenue = 0;
    for (const item of this.items) {
      revenue += item.calculateRevenue();
    }
    return revenue;
  }

  calculateProfit() {
    let income = 0;
    for (const item of this.items) {
      income += item.calculateProfit();
    }
    return income - this.calculateRevenue() * this.transactionFeePercent;
  }
}
