class GradeCalculator {
  private readonly score;

  constructor(score: number) {
    this.score = score;
  }

  /**
   * 리팩토링
   * 1) switch
   * 2) 관련 로직만 함수로 분리
   * 3) 객체로 분리
   */
  calculateGrades() {
    if (this.score >= 90) return ScoreGrades.A;

    if (this.score >= 80) return ScoreGrades.B;

    if (this.score >= 70) return ScoreGrades.C;

    if (this.score >= 60) return ScoreGrades.D;

    return ScoreGrades.F;
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
    const gradeCalculator = new GradeCalculator(90);

    // then
    expect(gradeCalculator.calculateGrades()).toEqual('A');
  });

  it('[B] 점수가 80점 이상 90점 미만', () => {
    // given
    const gradeCalculator = new GradeCalculator(85);

    // then
    expect(gradeCalculator.calculateGrades()).toEqual('B');
  });

  it('[C] 70점 이상 80점 미만', () => {
    // given
    const gradeCalculator = new GradeCalculator(75);

    // then
    expect(gradeCalculator.calculateGrades()).toEqual('C');
  });
  it('[D] 60점 이상 70점 미만', () => {
    // given
    const gradeCalculator = new GradeCalculator(65);

    // then
    expect(gradeCalculator.calculateGrades()).toEqual('D');
  });

  it('[F]: 60점 미만', () => {
    // given
    const gradeCalculator = new GradeCalculator(55);

    // then
    expect(gradeCalculator.calculateGrades()).toEqual('F');
  });
});
