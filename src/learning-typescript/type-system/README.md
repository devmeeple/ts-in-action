# 타입 시스템

> 객체와 원시 타입 간의 차이점은 무엇인가?

## 할당 가능성(Assignability)

> 책을 읽으면서 점점 더 복잡한 할당 가능성 문제를 보게 될 것 입니다. 그리고 **실제 타입과 예상된 타입 간에 보고된 차이점을 이해하려면 주의 깊게 읽어야 합니다**. 그렇게 하면 구문 오류에
> 대해 어려움을 느낄 때 타입스크립트로 작업하는 것이 훨씬 쉬워질 것입니다.

변수에 값을 할당할 때 값의 타입이 변수의 타입과 호화되는지를 나타냄

```typescript
let rocker: string;
```

초기값을 할당하지 않은 any 타입 변수를 방지하기 위해 타입 애너테이션(type annotation)을 제공한다. 변수의 타입을 지정할 수 있다.

## 타입 애너테이션

> In most cases, though, this isn’t needed. Wherever possible, TypeScript tries to automatically infer the types in your
> code. For example, the type of variable is inferred based on the type of its initializer:
>
> Type Annotations on Variables by TypeScript Handbook

> 필자를 포함한 많은 개발자는 아무것도 변하지 않는 변수에는 타입 애너테이션을 추가하지 않기를 선호합니다. 타입 애너테이션을 수동으로 작성하는 일은 번거롭습니다. 특히 타입이 변경되거나
> 복잡한 타입일 때 더욱 그렇습니다.
>
> 이후 장에서 일반적으로 유추되지 않은 타입스크립트 정보를 명시적 타입 애너테이션이 알려주는 방법을 살펴봅니다.

기존에 사용하던 정적타입 언어(Java, C)에서는 타입을 지정하는 것이 일반적이었다. 하지만 자바스크립트의 슈퍼셋(superset)인 타입스크립트를 사용할 때는 명시적으로 지정할 때도 있고
타입 추론을 사용할 때도 있어서 혼란스러웠다. 나만 이런 문제를 고민하나?라는 생각을 하던차에 일부 자료(책, 영상)에서는 타입을 지정하라는 이야기도 들어서 혼란은 가중됐다.

## 모듈

`import` 혹은 `export`가 포함된 모든 파일을 의미한다.

- `import`: 가져오기
- `export`: 내보내기
