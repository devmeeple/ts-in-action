/**
 * 3.1.2 유니언 속성
 *
 * 유니언 타입의 물리학자(physicist) 변수는 string, number 타입을 가진다.
 * 함수는 두 타입을 만족하는 toString() 함수만 동작한다.
 * toUpperCase(), toFixed()는 각 string, number 형에서만 동작할 수 있는 함수이므로 에러가 발생한다.
 * 합집합을 생각하면 이해가 쉽다.
 * TS2339: Property 'toUpperCase' does not exist on type '&quot;Richard Feynman&quot; | 69'. Property 'toUpperCase' does not exist on type '69'.
 */
const physicist = Math.random() > 0.5 ? 'Richard Feynman' : 69;

physicist.toString(); // OK

// physicist.toUpperCase();
// physicist.toFixed();

/**
 * 3.2.2 조건 검사를 통한 내로잉
 *
 * case 1에서는 값이 리처드 파인만(Richard Feynman)이면 실행되는 함수를 작성했다.
 * case 2에서는 값이 리처드 파인만 또는 69의 값을 가진다.
 * 따라서 타입을 모두 만족하는 함수가 아닌 toUpperCase()는 에러가 발생한다.
 * TS2339: Property 'toUpperCase' does not exist on type '&quot;Richard Feynman&quot; | 69'. Property 'toUpperCase' does not exist on type '69'.
 */
const scientist = Math.random() > 0.5 ? 'Richard Feynman' : 69;

// case 1:
if (scientist === 'Richard Feynman') {
  scientist.toUpperCase();
}

// case 2:
// scientist.toUpperCase();
