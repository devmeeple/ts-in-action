import { TicketOffice } from './TicketOffice';

/**
 * 티켓 판매원
 */
export class TicketSeller {
  constructor(private _ticketOffice: TicketOffice) {}

  get ticketOffice(): TicketOffice {
    return this._ticketOffice;
  }
}
