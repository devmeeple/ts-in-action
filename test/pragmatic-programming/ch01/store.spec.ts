import { Food } from '../../../src/pragmatic-programming/ch01/food';
import { Order } from '../../../src/pragmatic-programming/ch01/order';
import { Store } from '../../../src/pragmatic-programming/ch01/store';

describe('Store', () => {
  it('모든 주문의 판매 수익 합계를 계산한다', () => {
    // given
    const food = new Food(10000, 6000);
    const order = new Order([food]);
    const store = new Store([order], 5000);

    // when
    const sut = store.calculateRevenue();

    // then
    expect(sut).toBe(10000);
  });

  it('주문의 총합에서 임대료를 뺀 값을 반환한다', () => {
    // given
    const food1 = new Food(10000, 6000);
    const food2 = new Food(10000, 6000);
    const order = new Order([food1, food2]);
    const store = new Store([order], 5000);

    // when
    const sut = store.calculateProfit();

    // then
    expect(sut).toEqual(2400);
  });
});
