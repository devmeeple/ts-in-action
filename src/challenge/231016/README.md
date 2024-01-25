# 문제풀이
## 두 수의 나눗셈
정수부분을 반환하라는 조건에 난감했다. 하지만 `Math.trunc` 로 문제를 해결했다.
### Math.trunc()
주어진 값의 소수부를 제거하고 정수부분을 반환한다.
```typescript
// math-trunc.ts
export const solution = (price: number, quantity: number) => Math.trunc(price * quantity);

// math-trunc.test.ts
import {solution} from "./math-trunc";

describe('가격과 수량으로 총 비용 계산하기', () => {
    it('총 비용을 계산하고 소숫점 이하의 값을 제거한다.', () => {
        expect(solution(5.5, 3)).toBe(16);
        expect(solution(2.8, 4)).toBe(11);
    });
});
```

## 배열 두 배 만들기
### map()
배열메소드로 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 만든다.
```typescript
// convertToUpperCase.ts
export const convertToUpperCase = (arr: string[]) => arr.map((str) => str.toUpperCase());

// convenrtToUpperCase.test.ts
import {convertToUpperCase} from "./convertToUpperCase";

describe('배열의 문자열을 모두 대문자로 변환하기', () => {
    it('각 문자열이 대문자로 변환되야 한다.', () => {
        const arr = ['dog', 'cat'];
        const expected = ['DOG', 'CAT'];
        expect(convertToUpperCase(arr)).toEqual(expected);
    });
});

```
