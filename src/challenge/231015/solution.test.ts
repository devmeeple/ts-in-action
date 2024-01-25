import { findingQuotients } from './finding-quotients';
import { sum } from './sum';
import { minus } from './minus';
import { multiply } from './multiply';

/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/120805?language=javascript
 * 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.
 */
test('몫 구하기', () => {
  expect(findingQuotients(10, 5)).toBe(2);
  expect(findingQuotients(7, 2)).toBe(3);
});

/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/120802?language=javascript
 * 정수 num1과 num2가 주어질 때, num1과 num2의 합을 return 하도록 solution 함수를 완성해주세요.
 */
test('두 수의 합', () => {
  expect(sum(2, 3)).toBe(5);
  expect(sum(100, 2)).toBe(102);
});

/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/120803?language=javascript
 * 정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return 하도록 solution 함수를 완성해주세요.
 */
test('두 수의 차', () => {
  expect(minus(2, 3)).toBe(-1);
  expect(minus(100, 2)).toBe(98);
});

/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/120804?language=javascript
 * 정수 num1, num2가 매개변수 주어집니다. num1과 num2를 곱한 값을 return 하도록 solution 함수를 완성해주세요.
 */
test('두 수의 곱', () => {
  expect(multiply(3, 4)).toBe(12);
  expect(multiply(27, 19)).toBe(513);
});
