/**
 * 1.4.1 타입스크립트 실전
 * 길이(length)는 String 객체의 속성(property)이다.
 * 값에 접근하지 않고 함수를 실행하려고 하기 때문에 오류가 발생한다.
 * TS2349: This expression is not callable. Type 'Number' has no call signatures.
 */

const firstname = 'Georgia';
const nameLength = firstname.length;

// const nameLength = firstname.length();
