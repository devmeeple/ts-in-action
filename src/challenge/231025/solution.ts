export const solution = {

    findFirstNavigateIndex(num_list: number[]) {
        // findIndex 메소드로 리팩토링 가능
        for (let i = 0; i < num_list.length; i++) {
            if (num_list[i] < 0) {
                return i;
            }
        }
        return -1;
    },
    manipulateNumberByControlString(n: number, control: string) {
        for (let i = 0; i < control.length; i++) {
            if (control[i] === 'w') {
                n += 1;
            } else if (control[i] === 's') {
                n -= 1;
            } else if (control[i] === 'd' ) {
                n += 10;
            } else {
                n -= 10;
            }
        }
        return n;
    },
    getMultiplesOfKUpToN(n: number, k: number) {
        const result = [];
        for (let i = 1; i <= n; i++) {
            if (i % k === 0) {
                result.push(i);
            }
        }
        return result;
    },
    sumOfStringIntegers(num_str: string) {
        let sum = 0;
        for (let i = 0; i < num_str.length; i++) {
            sum += Number(num_str[i]);
        }
        return sum;
    }
};