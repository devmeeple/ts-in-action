import { Rectangle } from 'src/pragmatic-programming/ch04/rectangle';
import { Square } from '../../../src/pragmatic-programming/ch04/square';

describe('Square', () => {
  describe('리스코프 치환 원칙(LSP: Liskov Substitution Principle) 위반 사례 1', () => {
    it('면적을 계산한 결과를 반환한다', () => {
      // given
      const rectangle: Rectangle = new Square(10);
      rectangle.height = 5;

      // when
      const sut = rectangle.calculateArea();

      // then
      expect(sut).toEqual(50);
    });
  });
});
