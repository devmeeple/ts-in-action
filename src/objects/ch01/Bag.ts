import { Invitation } from './Invitation';
import { Ticket } from './Ticket';

/**
 * 관람객은 가방을 들고 올 수 있다. 허용되는 소지품은 다음과 같다.
 * _amount: 현금
 * _invitation: 초대권
 * _ticket: 티켓
 */
export class Bag {
  private _amount: number;
  private _invitation: Invitation;
  private _ticket: Ticket;

  constructor(amount: number, invitation: Invitation, ticket: Ticket) {
    this._amount = amount;
    this._invitation = invitation;
    this._ticket = ticket;
  }

  // 초대권의 여부 판단
  hasInvitation() {
    return this._invitation !== null;
  }

  // 티켓 소유 여부 판단
  hasTicket() {
    return this._ticket !== null;
  }

  // 초대권 -> 티켓 교환
  setTicket(ticket: Ticket) {
    this._ticket = ticket;
  }

  // 현금 감소
  minusAmount(amount: number) {
    this._amount -= amount;
  }

  // 현금 증가
  plusAmount(amount: number) {
    this._amount += amount;
  }
}
