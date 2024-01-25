export const solution = {
  sumEvenNumber(n: number) {
    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
      if (i % 2 === 0) {
        sum += i;
      }
    }
    return sum;
  },
  measure(number: number) {
    const angle = {
      acute: 1,
      right: 2,
      obtuse: 3,
      straight: 4,
    };
    if (number > 0 && number < 90) {
      return angle.acute;
    } else if (number === 90) {
      return angle.right;
    } else if (number < 180) {
      return angle.obtuse;
    }
    return angle.straight;
  },
  /**
   * 총얼마를 지불해야 하는가?
   * @param n 양꼬치 1인분: 12,000
   * @param k 음료수 1개: 2,000
   */
  sumPrice(n: number, k: number) {
    const lambSkewers = 12000;
    const drink = 2000;
    const freeDrink = Math.floor(n / 10);

    // 양꼬치 3인분을 주문하고, 음료수 2개를 주문 -> 음수가 될 수 있음. Math.max 를 통해 예외처리
    const paidDrink = Math.max(k - freeDrink, 0);

    return (lambSkewers * n + drink * paidDrink).toLocaleString();
  },
  /**
   * 한 자의 길이는 2cm
   * @param message 1 <= message.length <= 50
   */
  writeLetter(message: string) {
    if (message.length >= 1 && message.length <= 50) {
      return message.length * 2;
    }
  },
};
