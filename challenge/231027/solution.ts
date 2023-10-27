export const solution = {

    findPosition(dot: number[]) {
        const x = dot[0];
        const y = dot[1];

        if (x > 0 && y > 0) {
            return 1;
        } else if (x < 0 && y > 0) {
            return 2;
        } else if (x < 0 && y < 0) {
            return 3;
        } else if (x > 0 && y < 0) {
            return 4;
        }
    },
    isSubstringContained(str1: string, str2: string) {
        return str1.includes(str2) ? 1 : 2;
    },
    calculateMinimumPizzasNeeded(slice: number, n: number) {
        return Math.ceil(n / slice);
    },
    isTrianglePossible(sides: number[]) {
        const max = Math.max(...sides);
        const index = sides.indexOf(max);

        sides.splice(index, 1);

        // 남은 배열 요소 더하기
        const sumOfOthers = sides.reduce((prev, next) => prev + next, 0);

        return max >= sumOfOthers ? 2 : 1;
    }
};
