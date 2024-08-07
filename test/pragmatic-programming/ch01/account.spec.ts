import { Account } from '../../../src/pragmatic-programming/ch01/account';

describe('Account', () => {
  describe('canAfford', () => {
    it('계좌에서 물건을 구매할 수 있으면 true를 반환한다', () => {
      // given
      const account = new Account(10000);

      // when
      const sut = account.canAfford(3000);

      // then
      expect(sut).toEqual(true);
    });

    it('계좌에서 물건을 구매할 수 없으면 false를 반환한다', () => {
      // given
      const account = new Account(10000);

      // when
      const sut = account.canAfford(30000);

      // then
      expect(sut).toEqual(false);
    });
  });

  it('계좌에서 지정된 금액을 출금한다', () => {
    // given
    const account = new Account(10000);

    // when
    account.withdraw(3000);

    // then
    expect(account.money).toEqual(7000);
  });
});
