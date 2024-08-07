# 자바/스프링 개발자를 위한 실용주의 프로그래밍

객체지향부터 스프링과 테스트까지, 다시 제대로 배우는 애플리케이션 개발

**<참고 자료>**

* [김우근 『자바/스프링 개발자를 위한 실용주의 프로그래밍』](https://product.kyobobook.co.kr/detail/S000213447953)

# 2. 객체의 종류

## 2.1 VO(Value Object: 값 객체)

### 2.1.1 불변성

불변성(immutability)을 강조하는 이유가 무엇일까. '변하지 않는다'는 간단한 개념이 시스템의 복잡도를 획기적으로 낮춘다. 과거에 숫자1과 현재 숫자 1은 같은 의미로 사용한다.
이는 예측가능하고 신뢰할 수 있는 소프트웨어를 만들 수 있게한다.

```typescript
class Color {
  constructor(public readonly r: number, public readonly g: number, public readonly b: number) {
  }
}
```
