# The TypeScript Handbook

자바스크립트는 크로스 플랫폼 언어다. 크로스 플랫폼 언어란 하나의 소스코드로 여러 환경에서 실행될 수 있는 언어를 의미한다. 자바스크립트는 프런트엔드, 백엔드등에서 사용할 수 있다.

## 학습 내용 📚

* TypeScript 구문 및 패턴을 읽고 이해한다.
* 컴파일러(compiler) 옵션의 효과를 설명한다.
* 타입 시스템 동작을 예측한다.

## 선수지식 및 유의사항

* Microsoft Learn JavaScript tutorial 또는 JavaScript at the Mozilla Web Docs
* 다른 언어 사용경험이 있다면 핸드북을 통해 JavaScript를 배운다.

**<참고 자료>**

* [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

# 02. The Basics

TypeScript는 생산성을 높이기 위해 사용한다. 그렇다면 어떤 방법으로 생산성을 높일까.

1. 실행 전에 발생하는 버그를 방지한다.
2. 타입 검사기를 통해 IDE 지원이 편리하다.

TypeScript는 타입을 생략하더라도 타입을 추론한다. 따라서 명시적으로 타입을 지정하지 않아도 된다. 명심해야 될 사실은 TypeScript 관련 코드는
결국 사라진다.

## 설치하기

```shell
npm install -g typescript # 전역으로 설치한다. tsc(TypeScript compiler)도 함께 설치된다.
npm list -g typescript
npm uninstall -g typescript
```

### 컴파일러 옵션

```shell
tsc --noEmitOnError <파일명>
```

코드를 수정해도 JavaScript 코드가 업데이트되지 않는다.

```shell
tsc --target es2015
```

기본적으로 ES3(ECMAScript 3)를 대상으로 작성한다. `target`을 지정하면 ECMAScript 버전을 변경한다.
