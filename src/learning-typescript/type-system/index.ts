/**
 * 2.1 타입의 종류
 */
const bestSong = Math.random() > 0.5 ? 'What Was I Made For?' : 'bad guy';

/**
 * 2.2 할당 가능성(assignability)
 * 변수 lastName 타입은 string 으로 추론된다.
 * 하지만 이후 boolean 타입으로 변경 시도하여 오류가 발생한다.
 * 할당 가능성은 객체를 비교할 때 더욱 중요하다.
 * TS2322: Type 'boolean' is not assignable to type 'string'.
 */
// let lastName = 'King';
// lastName = true;
