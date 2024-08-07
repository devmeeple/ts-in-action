import { Shop } from '../../../src/pragmatic-programming/ch01/shop';
import { Account } from '../../../src/pragmatic-programming/ch01/account';
import { Product } from '../../../src/pragmatic-programming/ch01/product';

describe('Shop', () => {
  it('상품을 구매한다', () => {
    // given
    const shop = new Shop();
    const account = new Account(10000);
    const product1 = new Product('불고기 버거', 4000);

    // when
    const sut = shop.sell(account, product1);

    // then
    expect(sut).toEqual('불고기 버거를 구매했습니다.');
  });

  it('잔액이 부족하면 구매가 불가능하다', () => {
    // given
    const shop = new Shop();
    const account = new Account(100);
    const product = new Product('불고기 버거', 4000);

    // when
    const sut = shop.sell(account, product);

    // then
    expect(sut).toEqual('잔액이 부족합니다.');
  });
});
