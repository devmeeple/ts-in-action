class GradeCalculator {
  private readonly score: number;

  private constructor(score: number) {
    this.score = Math.floor(score / 10);
  }

  static of(score: number) {
    if (score < 0 || score > 100) {
      throw new Error('점수는 0점 미만 100점 초과할 수 없습니다');
    }
    return new GradeCalculator(score);
  }

  /**
   * 리팩토링
   * 1) switch
   * 2) 관련 로직만 함수로 분리
   * 3) 객체로 분리
   */

  /**
   * 점수를 계산하는 로직과 점수를 얻는 로직을 분리
   */
  calculateGrades() {
    switch (this.score) {
      case 9:
        return ScoreGrades.A;
      case 8:
        return ScoreGrades.B;
      case 7:
        return ScoreGrades.C;
      case 6:
        return ScoreGrades.D;
      default:
        return ScoreGrades.F;
    }
  }
}

enum ScoreGrades {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  F = 'F',
}

describe('학점 계산기', () => {
  it('[A] 점수가 90점 이상', () => {
    // given
    const gradeCalculator = GradeCalculator.of(90);

    // then
    expect(gradeCalculator.calculateGrades()).toEqual('A');
  });

  it('[B] 점수가 80점 이상 90점 미만', () => {
    // given
    const gradeCalculator = GradeCalculator.of(85);

    // then
    expect(gradeCalculator.calculateGrades()).toEqual('B');
  });

  it('[C] 70점 이상 80점 미만', () => {
    // given
    const gradeCalculator = GradeCalculator.of(75);

    // then
    expect(gradeCalculator.calculateGrades()).toEqual('C');
  });
  it('[D] 60점 이상 70점 미만', () => {
    // given
    const gradeCalculator = GradeCalculator.of(65);

    // then
    expect(gradeCalculator.calculateGrades()).toEqual('D');
  });

  it('[F]: 60점 미만', () => {
    // given
    const gradeCalculator = GradeCalculator.of(55);

    // then
    expect(gradeCalculator.calculateGrades()).toEqual('F');
  });

  it('[에러] 점수 범위에 숫자를 입력하지 않으면 에러가 발생한다', () => {
    expect(() => GradeCalculator.of(101)).toThrow(
      new Error('점수는 0점 미만 100점 초과할 수 없습니다'),
    );
    expect(() => GradeCalculator.of(-1)).toThrow(
      new Error('점수는 0점 미만 100점 초과할 수 없습니다'),
    );
  });
});
