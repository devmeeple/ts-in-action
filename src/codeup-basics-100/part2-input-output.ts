export class Part2InputOutput {
  getNumberValue(num: number) {
    return num;
  }

  getString(str: string) {
    this.isNotValid(str);

    return str;
  }

  private isNotValid(str: string) {
    const MAX_LENGTH = 2000;

    if (str.length >= MAX_LENGTH) {
      throw new Error('유효하지 않은 입력입니다. 2000자 이하로 입력해주세요');
    }

    if (str.length >= 50) {
      throw new Error('유효하지 않은 입력입니다. 50자 이하로 입력해주세요');
    }
  }

  getTwoNumber(first: number, second: number) {
    return `${first} ${second}`;
  }

  getChangeTwoString(first: string, second: string) {
    return `${second} ${first}`;
  }

  getToFixedSecond(num: number) {
    return Number.parseFloat(num.toFixed(2));
  }

  getThreeTimes(num: number) {
    return `${num} ${num} ${num}`;
  }

  getTimeFormat(time: string) {
    const [hour, minute, second] = time.split(':');

    // 시:분:초를 입력받은 상황
    if (second) {
      return minute;
    }

    // 시:분 형식으로 반환
    return `${hour}:${minute}`;
  }

  getDateFormat(date: string) {
    const [year, month, day] = date.split('.');
    // 입력된 문자열의 길이가 지정된 길이보다 크거나 같으면 원래 문자열을 반환
    return `${year}.${month.padStart(2, '0')}.${day.padStart(2, '0')}`;
  }

  convertDateFormat(date: string) {
    const [year, month, day] = date.split('.');
    return `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${year.padStart(2, '0')}`;
  }

  getSocialSecurityNumberFormat(socialSecurityNumber: string) {
    const [frontPart, backPart] = socialSecurityNumber.split('-');
    return `${frontPart}${backPart}`;
  }

  getSeparateNumber(number: number) {
    if (Math.abs(number) > 10000) {
      throw new Error(
        '유효하지 않은 입력입니다. 절대값은 10000을 넘을 수 없습니다',
      );
    }

    return number.toString().split('.').map(Number);
  }

  getSplitCharacter(str: string) {
    this.stringCheck(str);
    return str.split('');
  }

  private stringCheck(str: string) {
    const MAX_LENGTH = 20;
    if (str.length > MAX_LENGTH) {
      throw new Error('단어는 20자를 초과할 수 없습니다');
    }
  }

  splitDigits(number: number) {
    this.validateNumber(number);

    const digits = number.toString().split('').map(Number);
    const factors = [10000, 1000, 100, 10, 1];

    return digits.map((digit, index) => factors[index] * digit);
  }

  private validateNumber(number: number) {
    const MIN_NUMBER = 10000;
    const MAX_NUMBER = 99999;
    if (number < MIN_NUMBER || number > MAX_NUMBER) {
      throw new Error('유효하지 않은 입력입니다');
    }
  }
}
