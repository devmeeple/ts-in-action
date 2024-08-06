import { Store } from './store';

/**
 * 음식 체인점 관리 시스템
 * 1) calculateRevenue: 매출을 계산하는 함수
 * 2) calculateProfit: 순이익을 계산하는 함수
 */
export class RestaurantChain {
  constructor(private stores: Store[]) {}

  calculateRevenue() {
    let revenue = 0;
    for (const store of this.stores) {
      revenue += store.calculateRevenue();
    }
    return revenue;
  }

  calculateProfit() {
    let income = 0;
    for (const store of this.stores) {
      income += store.calculateProfit();
    }
    return income;
  }
}
