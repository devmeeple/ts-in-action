import { Calculable } from './calculable.interface';

export class Order implements Calculable {
  private transactionFeePercent = 0.03; // 결제 수수료 3%

  constructor(private foods: Calculable[]) {}

  calculateRevenue() {
    let revenue = 0;
    for (const food of this.foods) {
      revenue += food.calculateRevenue();
    }
    return revenue;
  }

  calculateProfit() {
    let income = 0;
    for (const food of this.foods) {
      income += food.calculateProfit();
    }
    return income - this.calculateRevenue() * this.transactionFeePercent;
  }
}
