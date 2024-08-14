export interface Order {
  isPaid: boolean;
  items: number;
  isShipped: boolean;
  customerIsVerified: boolean;
}

// TODO: 2024.08.14 부정 조건문 지양하기, 에러 계층 나누기
export function processOrder(order: Order) {
  if (!order.isPaid) {
    throw new Error('오류: 잔액이 부족합니다');
  }

  if (order.items <= 0) {
    throw new Error('오류: 찾을 수 없는 항목입니다');
  }

  if (!order.isShipped) {
    throw new Error('오류: 배송되지 않은 주문입니다');
  }

  if (!order.customerIsVerified) {
    throw new Error('오류: 확인되지 않은 고객입니다');
  }

  return '주문이 성공적으로 처리되었습니다';
}
