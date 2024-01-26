/**
 * 3. 연산자
 *
 * 문제1과 문제2  일반화
 */

export class OperationEx {
  private readonly num1;
  private readonly num2;
  private readonly num3;

  constructor(num1: number, num2: number, num3: number) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
  }

  calculateAverage() {
    const sum = this.calculateSum();
    const isInteger = this.isSumInteger(sum);

    if (isInteger) {
      return Math.floor(sum / 3);
    }

    return sum / 3;
  }

  private calculateSum() {
    return this.num1 + this.num2 + this.num3;
  }

  private isSumInteger(sum: number) {
    return Number.isInteger(sum);
  }
}
