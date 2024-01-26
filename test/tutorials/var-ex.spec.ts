describe('변수', () => {
  describe('문제1', () => {
    it('num1, num2를 선언하고 계산한다', () => {
      // given
      const num1 = 4;
      const num2 = 3;

      // then
      expect(num1 + num2).toBe(7);
      expect(num1 - num2).toBe(1);
      expect(num1 * num2).toBe(12);
    });
  });

  describe('문제2', () => {
    it('num1과 num2 두 변수의 합을 저장하는 변수 sum의 결과', () => {
      // given
      const num1 = 10;
      const num2 = 20;
      const sum = num1 + num2;

      expect(sum).toBe(30);
    });
  });

  describe('문제3 - 데이터 타입', () => {
    it('boolean 타입을 반환한다', () => {
      // given
      const getBooleanVar = () => {
        return true;
      };

      // when + then
      expect(getBooleanVar()).toBeTruthy();
    });

    it('백억을 반환한다', () => {
      // given
      const getNumberVar = () => {
        return 1_0000_0000_00;
      };

      expect(getNumberVar()).toBe(1_0000_0000_00);
    });
  });
});
