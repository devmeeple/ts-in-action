import { RestaurantChain } from '../../../src/pragmatic-programming/ch01/restaurant-chain';
import { Store } from '../../../src/pragmatic-programming/ch01/store';
import { Order } from '../../../src/pragmatic-programming/ch01/order';
import { Food } from '../../../src/pragmatic-programming/ch01/food';

describe('RestaurantChain', () => {
  it('음식 체인점의 총 수입을 계산한다', () => {
    // given
    const food1 = new Food(10000, 6000);
    const food2 = new Food(10000, 6000);
    const order = new Order([food1, food2]);
    const store = new Store([order], 5000);
    const restaurantChain = new RestaurantChain([store]);

    // when
    const sut = restaurantChain.calculateRevenue();

    // then
    expect(sut).toEqual(20000);
  });

  it('음식 체인점의 순수익을 계산한다', () => {
    // given
    const food1 = new Food(10000, 6000);
    const food2 = new Food(10000, 6000);
    const order = new Order([food1, food2]);
    const store = new Store([order], 5000);
    const restaurantChain = new RestaurantChain([store]);

    // when
    const sut = restaurantChain.calculateProfit();

    // then
    expect(sut).toEqual(2400);
  });
});
