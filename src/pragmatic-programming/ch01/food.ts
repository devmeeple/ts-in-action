export class Food {
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
