import { Ticket } from './Ticket';

/**
 * 매표소
 * amount: 티켓 판매 금액
 * tickets: 판매할 티켓
 */
export class TicketOffice {
  constructor(
    private _amount: number,
    private _tickets: Ticket[],
  ) {}

  getTicket() {
    const result = this._tickets[0];
    this._tickets = this._tickets.filter(
      (ticket, index: number) => 0 !== index,
    );

    return result;
  }

  minusAmount(amount: number) {
    this._amount -= amount;
  }

  plusAmount(amount: number) {
    this._amount += amount;
  }
}
