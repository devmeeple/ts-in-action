## [몫 구하기](finding-quotients.ts)
실수로 반환하는 문제가 있었다. `parseInt` 로 풀어보려 했지만, 부정확했다. `Math.floor` 를 통해 문제를 해결했다.  
- `Math.floor()`: 항상 반내림하여 주어진 숫자보다 작거나 같은 가장 큰 정수를 반환
```typescript
console.log(Math.floor(5.95)); // 5
console.log(Math.floor(-5.3)); // -6
```