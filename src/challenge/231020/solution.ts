export const solution = {
    getFirstNElements(num_list: number[], n: number) {
        return num_list.slice(0, n);
    },
    diceGame(a: number, b: number) {
        if (a % 2 !== 0 && b % 2 !== 0) {
            return a ** 2 + b ** 2;
        }
        if (a % 2 !== 0 || b % 2 !== 0) {
            return 2 * (a + b);
        }
        return Math.abs(a - b);
    },
    countEvenAndOdd(num_list: number[]) {
        let evenCount = 0;
        let oddCount = 0;
        for (const number of num_list) {
            (number % 2 === 0) ? evenCount++ : oddCount++;
        }
        return [evenCount, oddCount];
    },
    reverseString(my_string: string) {
        // 배열로 만들기 스프레드 문법도 가능
        return my_string.split('').reverse().join('');
    }
};