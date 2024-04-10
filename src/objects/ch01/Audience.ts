import { Bag } from './Bag';

/**
 * 관람객은 소지품을 보관하는 가방을 가진다.
 */
export class Audience {
  constructor(private _bag: Bag) {}

  get bag(): Bag {
    return this._bag;
  }
}
