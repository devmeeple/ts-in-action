/**
 * 공연을 관람하기 위해서는 티켓이 필요
 *
 * fee: 요금
 */
export class Ticket {
  constructor(private _fee: number) {}

  get fee(): number {
    return this._fee;
  }
}
