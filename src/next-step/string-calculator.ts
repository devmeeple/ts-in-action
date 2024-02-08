export class StringCalculator {
  add(text: string | null) {
    if (this.isBlank(text)) {
      return 0;
    }

    // type assertion non-null split 메서드에 넘어가는 값이 null 이 아님을 보장
    const numbers = this.toNumbers(this.split(text!));
    this.validateNonNegativeNumbers(numbers);
    return this.sum(numbers);
  }

  /**
   * 빈 문자열을 검증한다
   * null 또는 빈 문자열일 경우 true를 반환한다
   * @param text 기준 문자열
   * @returns true || fasle
   */
  private isBlank(text: string | null) {
    return text === null || text.trim().length === 0;
  }

  /**
   * 문자열을 분리한다
   * 기본 구분자 규칙: 쉼표(,), 콜론(:)
   * 커스텀 구분자 규칙: (//[구분자]\n[숫자들])
   * 커스텀 구분자가 정의된 경우 커스텀 구분자로 문자열을 분리하고 없다면 기본 구분자로 분리한다
   *
   * @param text 기준 문자열
   * @returns 분리된 문자열 배열
   */
  private split(text: string) {
    // 정규표현식을 사용하여 구분자 추가
    const defaultRegExp = /[,:]/;
    const customRegExp = /\/\/(.)\n(.*)/;

    const match = text.match(customRegExp);

    if (match) {
      const customDelimiter = match[1];
      return match[2].split(customDelimiter);
    }

    return text.split(defaultRegExp);
  }

  /**
   * 분리된 문자열을 숫자로 변환
   */
  private toNumbers(values: string[]) {
    return values.map(Number);
  }

  /**
   * 음수가 없는지 확인하고, 음수가 있으면 에러가 발생한다
   * 음수는 에러 메시지에 출력된다
   */
  private validateNonNegativeNumbers(numbers: number[]) {
    const negativeNumbers = numbers.filter((n) => n < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(
        `음수를 입력할 수 없습니다. 숫자: ${negativeNumbers.join(', ')}`,
      );
    }
  }

  /**
   * 수의 총합을 계산
   * reduce 함수를 사용해 누적값을 계산한다
   */
  private sum(numbers: number[]) {
    // 리듀서(acc: 누적값, curr: 현재값) { 반환 값 }
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
}
