class Book {
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}

describe('타입과 값으로 모두 사용 가능한 Class', () => {
  it('값으로 사용: 인스턴스 ', () => {
    // given
    const book = new Book('리팩터링 2판');

    // then
    expect(book).toBeDefined();
    expect(book.title).toEqual('리팩터링 2판');
  });

  it('타입으로 사용 : 타입체크', () => {
    // given
    const book = new Book('코어 자바스크립트');

    // when
    const isBook = (book: Book) => book instanceof Book;

    // then
    expect(isBook(book)).toBe(true);
  });
});
