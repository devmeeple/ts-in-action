import { Account } from './account';
import { Product } from './product';

export class Shop {
  sell(account: Account, product: Product) {
    if (account.canAfford(product.price)) {
      account.withdraw(product.price);
      return `${product.name}를 구매했습니다.`;
    }
    return `잔액이 부족합니다.`;
  }
}
