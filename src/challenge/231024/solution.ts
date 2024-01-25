export const solution = {

    sumBasedOnParity(n: number) {
        let result = 0;
        if (n % 2 === 0) {
            for (let i = 2; i <= n; i += 2) {
                result += i ** 2;
            }
        } else {
            for (let i = 1; i <= n; i += 2) {
                result += i;
            }
        }
        return result;
    },
    lengthBasedOperations(num_list: number[]) {
        let sum = 0;
        if (num_list.length >= 11) {
            for (let i = 0; i < num_list.length; i++) {
                sum += num_list[i];
            }
        } else {
            sum = 1;
            for (let i = 0; i < num_list.length; i++) {
                sum *= num_list[i];
            }
        }
        return sum;
    },

    getIntegerPart(flo: number) {
        return Math.floor(flo);
    },
    sumElements(num_list: number[]) {
        let sumElements = 0;
        let multiplyElements = 1;
        for (let i = 0; i < num_list.length; i++) {
            multiplyElements *= num_list[i];
            sumElements += num_list[i];
        }

        if (sumElements ** 2 > multiplyElements) {
            return 1;
        }

        return 0;
    }
};