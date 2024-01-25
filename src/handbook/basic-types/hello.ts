// 전장의 참혹함 속에도 크리스마스는 오는가
console.log('Merry Christmas Mr.Lawrence');

/**
 * 타입을 명시하여 오류를 해결할 수 있다.
 * person, song 은 string 타입을 가진다.
 * 하지만 항상 명시적 타입 표기가 필요한 것은 아니다. 많은 경우 생략된 정보를 추론할 수 있다.
 * @param person
 * @param song
 */
function playMusic(person: string, song: string) {
  console.log(`현재 듣는 노래는 ${person}의 ${song} 입니다.`);
}

playMusic('사카모토 류이치', 'Merry Christmas Mr.Lawrence');
