/**
 * 8.2.1 함수 속성
 */
class WithMethod {
  myMethod() {}
}

console.log(new WithMethod().myMethod() === new WithMethod().myMethod());

/*
class WithProperty {
  myProperty: () => {};
}

console.log(
  new WithProperty().myProperty() === new WithProperty().myProperty(),
);
*/

/**
 * 8.4.1 다중 인터페이스 구현
 *
 * 다중 인터페이스를 사용하지만 멤버를 구현하지 않은 경우 오류가 발생한다
 */
interface Graded {
  grades: number[];
}

interface Reporter {
  report: () => string;
}

class ReportCard implements Graded, Reporter {
  grades: number[];

  constructor(grades: number[]) {
    this.grades = grades;
  }

  report() {
    return this.grades.join(', ');
  }
}

// class Empty implements Graded, Reporter {}

/**
 * 8.5 클래스 확장
 */
class Teacher {
  teach() {
    console.log('The surest test of discipline is its absence');
  }
}

class StudentTeacher extends Teacher {
  learn() {
    console.log('I cannot afford the luxury of a closed mind');
  }
}

const teacher = new StudentTeacher();

teacher.teach(); // 기본 클래스
teacher.learn(); // 하위 클래스

// teacher.other(); // 어디에도 정의되지 않음
