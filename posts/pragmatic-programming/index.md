# 자바/스프링 개발자를 위한 실용주의 프로그래밍

객체지향부터 스프링과 테스트까지, 다시 제대로 배우는 애플리케이션 개발

**<참고 자료>**

* [김우근 『자바/스프링 개발자를 위한 실용주의 프로그래밍』](https://product.kyobobook.co.kr/detail/S000213447953)

# 2. 객체의 종류

각 개념을 외우고 엄격한 기준을 적용하기보단 각 개념이 만들어진 이유와 목적을 생각하고 접근하자.

* 불변성
* 예측 가능성
* 역할의 분리
* 항상성

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

## 2.2 DTO(Data Transfer Object: 데이터 전송 객체)

어떻게 데이터를 효과적으로 전달할까. 비즈니스 로직을 구현하지 않는다.

> **DTO에 관한 오해**
>
> 1. DTO는 프로세스, 계층 간 데이터 이동에 사용된다.
> 2. DTO는 게터, 세터를 갖고 있다.
> 3. DTO는 데이터베이스에 데이터를 저장하기 위해 사용되는 객체다.

**오해 1. DTO는 프로세스, 계층 간 데이터 이동에 사용된다.**

API 통신, 데이터베이스 통신을 위해 사용되는 객체가 아니라, 데이터 전달 목적이면 어디서든 사용한다. 어디에서 사용하는지(계층) 중요하지 않다.

**오해 2. DTO는 게터, 세터를 갖고 있다.**

객체지향이 추구하는 캡슐화를 위해서 멤버 변수를 `private`로 선언한다. 하지만 `private`를 선언하면서 게터, 세터를 만들어 사용하는 것은 `private`를 사용하는 의미가 없다.
캡슐화의 주요 목표 중 하나인 '정보 은닉'을 달성하기 위해서 모든 멤버 변수는 `private`로 선언하되 일부만 게터를 제공하자.

**오해 3. DTO는 데이터베이스에 데이터를 저장하는 데 사용되는 객체다.**

## 2.3 DAO(Data Access Object: 데이터 접근 객체)

데이터에 접근하기 위해 만들어진 객체. DAO가 만들어진 이유는 도메인 로직과 데이터베이스 연결 로직을 분리하기 위해서다.

## 2.4 엔티티(Entity: 개체)

엔티티는 도메인 엔티티, DB 엔티티, JPA 엔티티가 존재한다. 문맥에 따라 다르게 해석될 뿐이다. 소프트웨어 개발 분야에서 말하는 엔티티는 도메인 엔티티다.

### 2.4.1 도메인 엔티티

> 도메인 엔티티는 식별 가능하고 비즈니스 로직을 갖고 있으며, 조금 특별하게 관리되는 클래스로 만들어진 객체다.

도메인이란 '비즈니스 영역'이다. 도메인 모델이란 도메인 문제를 해결하기 위해서 만들어진 클래스 모델이다. 이러한 도메인 모델 중에서도 특별한 기능을 갖고 있는 모델을 '도메인 엔티티'라고 부른다.

### 2.4.2 DB 엔티티

데이터베이스 분야에서 유무형의 객체를 표현하는 데 사용했던 용어.

### 2.4.3 JPA 엔티티

> JPA 엔티티는 영속성 객체를 만들기 위한 도구다.

JPA 엔티티라기보단 '영속성 객체'가 적절하다. 이때 영속성이란 데이터가 영원히 이어지도록 어딘가에 저장하고 불러오는 것을 의미한다.

# 14. 테스트 대역

테스트 대역(test double)이란 테스트를 위해 만들어진 가짜 객체나 컴포넌트를 의미한다. 범위를 의미하지 않는다. 영화 주연 배우대신 위험한 장면을 촬영하는 스턴트맨에서 유래됐다.

* 테스트 대역을 사용하면 테스트 크기를 바꿀 수 있다. 예를 들어 API 호출이 필요했던 코드를 호출 없이 실행한다. (대형 테스트 -> 소형 테스트)
* 다양한 상황을 연출할 수 있다. (정상 상황, 장애 상황 등)
* 남용은 금지다. 실제 구현과 테스트 간의 거리감이 생길 수 있다. 밸런스가 중요하다.

영화에서도 CG, 스턴트맨 등 대역으로 다양한 방법을 사용한다. 소프트웨어 세계 또한 다양한 대역을 사용한다.

<테스트 대역의 5가지 유형>

| 유형    | 설명                                    |
|-------|---------------------------------------|
| Dummy | 아무런 동작을 하지 않는다.                       |
| Stub  | 지정한 값을 반환한다.                          |
| Fake  | 자체적인 로직을 가진다.                         |
| Mock  | 아무런 동작을 하지 않는다. 대신 어떤 행동이 호출됐는지 검증한다. |
| Spy   | 실제 객체와 똑같이 행동한다. 그리고 모든 행동 호출을 기록한다.  |

## 14.1 Dummy

```typescript
export class DummyVerificationEmailSender implements VerificationEmailSender {
  send(): void {
    // do noting...
  }
}
```

Dummy(더미) 객체는 코드가 정상적으로 동작하기 위한 역할만 맡는 대역이다.

## 14.2 Stub

Stub(스텁)은 실제 객체의 응답을 최대한 비슷하게 따라 하는 대역이다. 원본 응답을 복제해 똑같은 응답을 미리 준비하고 이를 바로 반환한다. 외부 연동을 하는 컴포넌트나 클라이언트를 대체하는데
주로 사용한다. 예를 들어, 외부 시스템의 API 호출 결과를 받아서 처리할 때 Stub 객체를 사용한다.

> ts-mockito 같은 라이브러리의 도움을 받아 Stub 객체를 쉽게 만들 수 있다. 하지만 이런 라이브러리 없이도 만들 수 있다는 점을 명심하자.

<findByEmail 메서드를 호출한 결과, 데이터가 있는 케이스를 반환하는 Stub 클래스>

```typescript
export class StubExistUserRepository implements UserRepository {

  async findByEmail(email: string): Promise<User> {
    return {
      id: 1,
      email,
      nickname: 'foobar',
      status: UserStatus.ACTIVE,
      verificationCode: 'aaaaaaaaaaaaaaaa',
    }
  }

  save(user: User): User {
    return {
      id: 1,
      email: user.email,
      nickname: user.nickname,
      status: user.status,
      verificationCode: user.verificationCode,
    }
  }
}
```

<findByEmail 메서드를 호출한 결과, 빈 값을 반환하는 Stub 클래스>

```typescript
export class StubExistUserRepository implements UserRepository {

  async findByEmail(email: string): Promise<User | null> {
    return null;
  }

  save(user: User): User {
    return {
      id: 1,
      email: user.email,
      nickname: user.nickname,
      status: user.status,
      verificationCode: user.verificationCode,
    }
  }
}
```

**<참고 자료>**

* [이동욱(향로) 'jest.mock 보다 ts-mockito 사용하기 (feat. Node.js)](https://jojoldu.tistory.com/638)

## 14.3 Fake

**Fake는 테스트를 위한 자체적인 논리를 가진다. 흉내 내는 객체다.**

```typescript
export class FakeUserRepository implements UserRepository {

  private readonly autoGeneratedId = 0;
  private readonly data: User[] = [];

  findByEmail(id: number): Promise<User | undefined> {
    return this.data.find(item => item.id === id);
  }
}
```

TypeORM의 동작을 최대한 흉내 내서 `FakeUserRepository`라는 클래스를 선언한다. 테스트 가독성을 높이고 여러 테스트에서 재활용 가능하다. 로컬 환경에서 개발할 때는 Fake 저장소를 사용해서
로컬 환경에서 데이터베이스와 연동하지 않고도 서버를 구동시킬 수 있다. (Spring Profile, NestJS ConfigModule)

## 14.4 Mock

**Mock(목)은 메서드 호출을 기록하고 상호 작용이 일어났는지 확인하는 객체다** 최근에는 Mock을 객체로 테스트 대역 객체로 바라보지 않고, '테스트 대역' 자체를 대표하는 단어가 돼버렸다. 테스트를 만들 때
테스트 대역을 이용하는 방식을 Mockist, 실제 코드를 이용해 테스트하는 방식을 Classist라고 부른다.

- Mock은 메서드 호출 및 상호작용을 기록한다.
- Mock은 어떤 객체와 상호 작용이 일어났는지 기록한다.
- Mock은 어떻게 상호 작용이 일어났는지 기록한다.

상호 작용(interaction)이란 무엇일까. 상태 기반 검증과 행위 기반 검증을 알아보자.

### 14.1 상태 기반 검증

"객체가 이 목표를 제대로 달성해 왔는가?"

상태 기반 검증(state-based verification)은 테스트의 검증 동작에 상태를 사용하는 방식이다. 테스트를 실행한 후 테스트 대상의 상태가 어떻게 변화됐는지를 보고 실행결과를 판단한다.

### 14.2 행위 기반 검증

"어떻게 목표를 달성해 왔는가?"

행위 기반 검증(behaviour-based verification)은 테스트의 검증 동작에 메서드 호출 여부를 확인하는 방식이다. 테스트 대상이나, 협력 객체, 협력 시스템의 메서드 호출 여부를 확인한다.
협력 객체와 상호 작용했는지 확인한다고 해서 '상호 작용 테스트'라고도 한다.

### 14.4.3 상태 기반 vs. 행위 기반

상태 기반 검증은 시스템의 내부 데이터 상태를 검증한다. 반면 행위 기반 검증은 주로 시스템의 내/외부 동작을 검증한다. 두 방식은 시스템을 서로 다른 측면에서 바라보고 품질을 보장하는데
사용하기 때문에 적절히 선택해야 한다.

하지만 테스트를 책임 단위로 바라보기 위해 가급적 상태 기반 검증을 권장한다. 내부 구현에 집착하면 객체지향과 자연스럽게 멀어진다.

<실행 여부를 판단하는 Mock>

```typescript
export class MockVerificationEmailSender implements VerificationEmailSender {
  isSendCalled = false;

  send(user: User): void {
    this.isSendCalled = true;
  }
}
```

## 14.5 Spy

> Mock vs. Spy

Spy(스파이)는 상호 작용을 검증할 때 주로 사용한다. Mock과 비슷하다고 생각할 수 있다. 하지만 내부 구현이 진짜, 가짜 구현체라는 차이를 가진다.
Mock으로 만들어진 객체는 Dummy, Stub처럼 동작한다. 반면 Spy로 만들어진 객체는 기본 동작이 실제 객체 코드와 같다. 실재 객체의 메서드 구현에 메서드 호출을 기록하는
부수적인 기능들이 추가된다. (물론, 일부 메서드는 Stub으로 만들어 고정된 응답을 반환하도록 만들 수 있다.)

영화에 스파이를 생각하면 쉽게 이해할 수 있다. 팀인것처럼 행동하지만 쥐도새도 모르게 정보를 흘린다.

컴포넌트를 상속해서 Spy를 만들 수 있다. 인터페이스를 구현(implements)하는 것이 아닌 상속(extends)하는 것을 주목하자. 더불어 프록시 패턴을 이용해 Spy를 만들 수 있다.

```typescript
export class SpyUserRepository extends UserRepositoryImpl {
  findByEmailCallCount = 0;
  saveCallCount = 0;

  findByEmail(email: string): Promise<User | undefined> {
    this.findByEmailCallCount++;
    return super.findByEmail(email);
  }

  save(user: User): User {
    this.saveCallCount++;
    return super.save(user);
  }
}
```
