describe('[Early Return] 주문 처리 시스템', () => {
  it('조건을 모두 만족하면 주문에 성공한다', () => {
    // given
    const order: Order = {
      isPaid: true,
      items: 1,
      isShipped: true,
      customerIsVerified: true,
    };

    // when
    const sut = processOrder(order);

    // then
    expect(sut).toBe('주문이 성공적으로 처리되었습니다');
  });

  it('잔액이 부족하면 주문에 실패한다', () => {
    // given
    const order: Order = {
      isPaid: false,
      items: 1,
      isShipped: true,
      customerIsVerified: true,
    };

    // when & then
    expect(() => processOrder(order)).toThrow(
      new Error('오류: 잔액이 부족합니다'),
    );
  });

  it('항목을 추가하지 않고 주문하면 실패한다', () => {
    // given
    const order: Order = {
      isPaid: true,
      items: 0,
      isShipped: true,
      customerIsVerified: true,
    };

    // when & then
    expect(() => processOrder(order)).toThrow(
      new Error('오류: 찾을 수 없는 항목입니다'),
    );
  });

  it('배송되지 않았다면 주문이 처리되지 않는다', () => {
    // given
    const order: Order = {
      isPaid: true,
      items: 1,
      isShipped: false,
      customerIsVerified: true,
    };

    // when & then
    expect(() => processOrder(order)).toThrow(
      new Error('오류: 배송되지 않은 주문입니다'),
    );
  });

  it('확인되지 않은 고객은 주문이 처리되지 않는다', () => {
    // given
    const order: Order = {
      isPaid: true,
      items: 1,
      isShipped: true,
      customerIsVerified: false,
    };

    // when & then
    expect(() => processOrder(order)).toThrow(
      new Error('오류: 확인되지 않은 고객입니다'),
    );
  });
});

interface Order {
  isPaid: boolean;
  items: number;
  isShipped: boolean;
  customerIsVerified: boolean;
}

function processOrder(order: Order) {
  let result = '';
  if (order.isPaid) {
    if (order.items > 0) {
      if (order.isShipped) {
        if (order.customerIsVerified) {
          result = '주문이 성공적으로 처리되었습니다';
        } else {
          throw new Error('오류: 확인되지 않은 고객입니다');
        }
      } else {
        throw new Error('오류: 배송되지 않은 주문입니다');
      }
    } else {
      throw new Error('오류: 찾을 수 없는 항목입니다');
    }
  } else {
    throw new Error('오류: 잔액이 부족합니다');
  }
  return result;
}
