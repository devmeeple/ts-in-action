describe('타입과 인터페이스 기본기', () => {
  it('should dd', () => {
    type NewStringType = string;
    type NewNullType = null;
    // 유니언 사용
    type MaleOrFemaleType = 'male' | 'female';

    interface IdolInterface {
      name: string;
      year: number;
    }

    const yujin: IdolInterface = {
      name: '안유진',
      year: 2003,
    };
  });
});
