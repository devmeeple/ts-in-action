export const solution = {
  countTallerThan(array: number[], height: number) {
    return array.filter((element) => element > height).length;
  },
  calculateMaxAmericanoAndRemainingMoney(money: number) {
    const AMERICANO_PRICE = 5500;
    const maxAmericano = Math.floor(money / AMERICANO_PRICE);
    const extraMoney = money - AMERICANO_PRICE * maxAmericano;
    return [maxAmericano, extraMoney];
  },
  sharePizza(n: number) {
    const PIZZA_SLICES = 7;
    // return (n % 7 === 0) ? Math.floor(n / 7) : Math.floor(n / 7) + 1;
    return Math.ceil(n / PIZZA_SLICES);
  },
  mapStringLengths(strlist: string[]) {
    return strlist.map((element) => element.length);
  },
};
