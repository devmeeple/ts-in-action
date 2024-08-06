import { Order } from '../../../src/pragmatic-programming/ch01/order';
import { Food } from '../../../src/pragmatic-programming/ch01/food';

describe('Order', () => {
  it('음식 판매수익을 계산한다', () => {
    // given
    const food = new Food(10000, 6000);
    const order = new Order([food]);

    // when
    const sut = order.calculateRevenue();

    // then
    expect(sut).toEqual(10000);
  });

  it('판매수익에서 결제 수수료를 뺀 소득을 계산한다', () => {
    // given
    const food = new Food(10000, 6000);
    const order = new Order([food]);

    // when
    const sut = order.calculateProfit();

    // then
    expect(sut).toEqual(3700);
  });
});
