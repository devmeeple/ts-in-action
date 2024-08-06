import { Store } from './store';

/**
 * 음식 체인점 관리 시스템
 */
export class RestaurantChain {
  constructor(private stores: Store[]) {}

  // 매출을 계산하는 함수
  calculateRevenue() {
    let revenue = 0;
    for (const store of this.stores) {
      for (const order of store.orders) {
        for (const food of order.foods) {
          revenue += food.price;
        }
      }
    }
    return revenue;
  }

  // 순이익을 계산하는 함수
  calculateProfit() {
    let cost = 0;
    for (const store of this.stores) {
      for (const order of store.orders) {
        let orderPrice = 0;
        for (const food of order.foods) {
          orderPrice += food.price;
          cost += food.originCost;
        }
        // 결제 금액의 3%를 비용으로 계산한다.
        cost += orderPrice * order.transactionFeePercent;
      }
      cost += store.rentalFee;
    }
    return this.calculateRevenue() - cost;
  }
}
