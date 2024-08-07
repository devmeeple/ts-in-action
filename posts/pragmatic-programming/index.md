# 자바/스프링 개발자를 위한 실용주의 프로그래밍

객체지향부터 스프링과 테스트까지, 다시 제대로 배우는 애플리케이션 개발

**<참고 자료>**

* [김우근 『자바/스프링 개발자를 위한 실용주의 프로그래밍』](https://product.kyobobook.co.kr/detail/S000213447953)

# 2. 객체의 종류

## 2.1 VO(Value Object: 값 객체)

신뢰할 수 있는 예측 가능한 객체를 만들자.

### 2.1.1 불변성

불변성(immutability)을 강조하는 이유가 무엇일까. '변하지 않는다'는 간단한 개념이 시스템의 복잡도를 획기적으로 낮춘다. 과거에 숫자1과 현재 숫자 1은 같은 의미로 사용한다.
이는 예측가능하고 신뢰할 수 있는 소프트웨어를 만들 수 있게한다.

```typescript
class Color {
  constructor(public readonly r: number, public readonly g: number, public readonly b: number) {
  }
}
```

`readonly`를 사용하면 불변성이 보장될까. 모든 멤버변수를 `readonly`로 선언해도 참조 타입인 객체가 있다면 불변성이 보장되지 않을 수 있다. 그리고 불변성은 함수에도 적용된다.
입력값이 같을 때 항상 같은 값을 반환하는 함수를 순수함수라고 부른다.

불변성을 지키는 완벽한 객체를 만드는 건 쉽지 않다. 주목해야 할 부분은 '불변성' 자체다. 불변성을 주목하는 이유는 '신뢰하는 객체'를 만들기 위해서다.
다른 객체와 협력할 때 예측 가능한 방식으로 동작한다는 건 어떤 의미를 가질지 생각해 보자.

> 소프트웨어 설계는 복잡성과의 끊임없는 전투다. 그러므로 우리는 특별하게 다뤄야 할 부분과 그렇지 않은 부분을 구분해야 한다. - 『도메인 주도 설계』(에릭 에반스, 위키북스, 2011)

불변성을 바라보는 방향을 바꾸자. 모든 객체와 함수를 불변하게 만들 자로 시작하는 게 아니라 어떻게 불확실성을 줄일 수 있을지 고민하자.

### 2.1.3 자가 검증

자가 검증(self validation)이란 클래스 스스로 상태가 유효한지 검증할 수 있음을 의미한다. VO의 생성자에는 반드시 유효한 상태 값이 들어오는지 검증하는 코드가 있어야 한다.

```typescript
export class Color {
  public readonly r: number;
  public readonly g: number;
  public readonly b: number;

  constructor(r: number, g: number, b: number) {
    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
      throw new Error('RGB는 0 ~ 255 사이의 값 이어야 한다.')
    }
    this.r = r;
    this.g = g;
    this.b = b;
  }
}
```
