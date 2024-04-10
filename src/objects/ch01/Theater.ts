import { TicketSeller } from './TicketSeller';
import { Audience } from './Audience';

/**
 * 극장
 */
export class Theater {
  constructor(private _ticketSeller: TicketSeller) {}

  /**
   * 관람객 입장을 도와주는 메서드
   * @param audience 관람객
   * 1. 관람객 가방에 초대권이 있는지 검증한다.
   * 2. 검증
   * (1) 가방에 초대장이 있다면 판매원에게 받은 티켓을 가방에 넣는다
   * (2) 가방에 초대장이 없다면 티켓을 판매한다 -> 현금 차감 -> 매표소 금액 증가 -> 티켓 교환
   */
  enter(audience: Audience) {
    if (audience.bag.hasInvitation()) {
      const ticket = this._ticketSeller.ticketOffice.getTicket();
      audience.bag.setTicket(ticket);
    } else {
      const ticket = this._ticketSeller.ticketOffice.getTicket();
      audience.bag.minusAmount(ticket.fee);
      this._ticketSeller.ticketOffice.plusAmount(ticket.fee);
      audience.bag.setTicket(ticket);
    }
  }
}
