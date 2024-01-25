export const solution = {
    replaceString(rny_string: string) {
        const character = 'm'
        const trick = 'rn';
        /**
         * replaceAll은 es2021에 도입된 메서드다. tsconfig 를 수정해야 한다.
         * return rny_string.replaceAll(character, trick);
         * 따라서 해당 문제를 정규식으로 풀었다.
         */
        return rny_string.replace(/m/g, trick); // 정규식을 사용한 문제해결
    },
    sumOfConcatenatedOddsAndEvens(num_list: number[]) {
        /**
         * 1) 주어진 배열을 짝수, 홀수로 분리한다.
         * 2) 문자열로 변경한다.
         * 3) 하나로 합친다.
         * 4) 정수로 변경해서 결과를 반환한다.
         */
        const evenNumbers = num_list
            .filter((value) => value % 2 === 0)
            .map(String)// 문자열로 변경
            .join(''); // 하나로 합치기

        const oddNumbers = num_list
            .filter((value) => value % 2 !== 0)
            .map(String)
            .join(''); // 하나로 합치기

        return parseInt(evenNumbers) + parseInt(oddNumbers);
    },
    transformValue(arr: number[]) {
        // if ~ else if 패턴을 빠른반환(Early Return)으로 리팩토링, 조건을 잘 따져보자.
        return arr.map((value) => {
            if (value >= 50 && value % 2 === 0) {
                return value / 2;
            }

            if (value < 50 && value % 2 !== 0) {
                return value * 2;
            }

            return value;
        });
    },
    transformArrayBasedOnK(arr: number[], k: number) {
        // 홀수라면 * k, 짝수라면 + k
        return (k % 2 !== 0) ? arr.map((value) => value * k) : arr.map((value) => value + k);
    },
};