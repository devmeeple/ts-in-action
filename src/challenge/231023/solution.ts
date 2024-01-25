export const solution = {

    toUpperCase(myString: string) {
        return myString.toUpperCase();
    },
    getOddsUpToN(n: number) {
        const result = [];
        for (let i = 1; i <= n; i += 2) {
            result.push(i);
        }
        return result;
    },
    multiplyBacteria(n: number, t: number) {
        return n * (2 ** t);
    },
    countDown(start_num: number, end_num: number) {
        const result: number[] = [];
        while (start_num >= end_num) {
            result.push(start_num);
            start_num -= 1;
        }
        return result;
    }
};