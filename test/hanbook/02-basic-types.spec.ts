function introduceMovie(title: string, grade: number) {
  return `제목: ${title}, 평점: ${grade}`;
}

describe('02. The Basics', () => {
  it('영화 제목과 평점을 반환한다', () => {
    // given
    const title = '컨택트';
    const grade = 5;

    // when
    const sut = introduceMovie(title, grade);

    // then
    expect(sut).toBe('제목: 컨택트, 평점: 5');
  });

  it('언어/지역설정에 맞는 소문자 hello world를 반환한다', () => {
    // given
    const announcement = 'Hello World';

    // when
    const sut = announcement.toLocaleLowerCase();

    // then
    expect(sut).toBe('hello world');
  });
});
