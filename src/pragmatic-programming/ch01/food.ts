import { Calculable } from './calculable.interface';

export class Food implements Calculable {
  constructor(
    private price: number,
    private originCost: number, // 원가
  ) {}

  calculateRevenue() {
    return this.price;
  }

  calculateProfit() {
    return this.price - this.originCost;
  }
}
