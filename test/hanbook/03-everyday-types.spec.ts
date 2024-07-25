function announce(book: { price: number; title: string }) {
  return `제목: ${book.title}, 가격: ${book.price}`;
}

function getCity(city: string | number) {
  if (typeof city === 'string') {
    return city.toUpperCase();
  }

  return city;
}

function welcomeMember(member: string[] | string) {
  if (Array.isArray(member)) {
    return member;
  }

  return member.length;
}

describe('03. Everyday Types', () => {
  it('[기본형] 타입을 명시하지 않아도 타입시스템을 통해 타입이 추론된다', () => {
    // given
    const title = '프로젝트 헤일메리';
    const price = 18500;

    // when

    // then
    expect(typeof title).toBe('string');
    expect(typeof price).toBe('number');
  });

  describe('Object Types', () => {
    it('객체 타입의 속성은 필수다', () => {
      // given
      const book = {
        title: '프로젝트 헤일메리',
        price: 18500,
      };

      // when
      const sut = announce(book);

      // then
      expect(sut).toBe('제목: 프로젝트 헤일메리, 가격: 18500');
    });

    it('선택적 속성(Optional Properties)이 가능하다', () => {});
  });

  describe('Union Types', () => {
    it('유니온 타입 변수 city는 string으로 추론된다', () => {
      // given
      const city = 'Seoul';

      // when
      const sut = getCity(city);

      // then
      expect(typeof sut).toBe('string');
    });

    it('배열 타입을 추론하고 입력한 배열을 반환한다', () => {
      // given
      const member = ['유재석', '박명수', '노홍철', '정형돈', '정준하', '하하'];

      // when
      const sut = welcomeMember(member);

      // then
      expect(sut).toEqual([
        '유재석',
        '박명수',
        '노홍철',
        '정형돈',
        '정준하',
        '하하',
      ]);
    });
  });
});
