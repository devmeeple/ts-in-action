import { OperationEx } from '../../src/tutorials/operation-ex';

/**
 * 팩토리 메소드를 사용해 객체 생성하도록 유도
 * 클래스 외부에서 직접적으로 생성자로 객체를 생성하지 못하도록 접근제한자(private)를 선언
 */

class OperationEx3 {
  private readonly score;

  private constructor(score: number) {
    this.score = score;
  }

  static createWithScore(score: number) {
    if (score < 0 || score > 100) {
      throw new Error('점수는 0 미만 이거나 100을 초과할 수 없습니다');
    }

    return new OperationEx3(score);
  }

  isPassingScore() {
    return this.score >= 80 && this.score <= 100;
  }
}

describe('3. 연산자', () => {
  describe('[문제1]', () => {
    const operation = new OperationEx(10, 20, 30);
    it('[정수는 소숫점을 버린다] 세 변수의 평균을 반환', () => {
      // given

      // when + then
      expect(operation.calculateAverage()).toEqual(20);
    });
  });

  describe('[문제2] 합과 평균을 출력하는 프로그램', () => {
    const operation = new OperationEx(1.5, 2.5, 3.5);
    it('[실수] 세 변수의 평균을 반환', () => {
      // given

      // when + then
      expect(operation.calculateAverage()).toEqual(2.5);
    });
  });

  describe('[문제3] 합격 범위', () => {
    it('점수가 80점 이상이고 100점 이하면 true를 반환한다', () => {
      // given
      const operationEx3 = OperationEx3.createWithScore(80);

      // then
      expect(operationEx3.isPassingScore()).toBeTruthy();
    });

    it('합격 범위에 포함되지 않으면 false를 반환한다', () => {
      // given
      const operationEx3 = OperationEx3.createWithScore(79);

      // then
      expect(operationEx3.isPassingScore()).toBeFalsy();
    });

    it('점수의 허용 범위(0 ~ 100)에 포함되지 않으면 에러가 발생한다', () => {
      expect(() => OperationEx3.createWithScore(10000)).toThrowError(
        new Error('점수는 0 미만 이거나 100을 초과할 수 없습니다'),
      );
    });
  });
});
