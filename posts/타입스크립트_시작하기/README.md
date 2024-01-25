# 타입스크립트 시작하기

Typescript + node 환경에서 테스트 환경을 구축한다. (브라우저는 사용하지 않는다.)

## 핵심 패키지

- typescript
- jest, @types/jest
- ts-jest, 
- ts-node, @types/node
- eslint, @typescript-eslint, @typescript-eslint/parser, @typescript-eslint/eslint-plugin
- prettier

> parser: 소스 파일 구문 분석을 위한 패키지
> plugins: typescript-eslint 규칙을 사용할 수 있게 지원

개발 환경에서만 타입스크립트를 설치해야 한다.

```shell
npm install tyepscript --save-dev # yarn add typescript --dev
npx tsc # yarn tsc 
```