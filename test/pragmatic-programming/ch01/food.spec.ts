import { Food } from '../../../src/pragmatic-programming/ch01/food';

describe('Food', () => {
  it('판매가를 반환한다', () => {
    // given
    const food = new Food(10000, 6000);

    // when
    const sut = food.calculateRevenue();

    // then
    expect(sut).toEqual(10000);
  });

  it('판매가에서 원가를 뺀 순이익을 반환한다', () => {
    // given
    const food = new Food(10000, 6000);

    // when
    const sut = food.calculateProfit();

    // then
    expect(sut).toEqual(4000);
  });
});
