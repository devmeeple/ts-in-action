type Album = {
  artist: string;
  title: string;
  year: number;
};

const album: Album = {
  // arstist: 'Television', 에러: 잘못된 속성 선언
  artist: 'Television',
  title: 'Marquee Moon',
  year: 1997,
};

const logUserJobTitle = (user: {
  job: {
    title: string;
  };
}) => {
  console.log(user.job.title);
};

// 에러가 여러줄 일 때, 가장 아래에서 위로 읽는다.
const exampleUser = {
  job: {
    title: 123,
  },
};

// logUserJobTitle(exampleUser);

const otherThing = {
  name: 'Alice',
};

const otherObject = {
  ...otherThing,
  thing: 'abc',
};

/**
 * 두 숫자를 더한다.
 *
 * @param firstNumber
 * @param secondNumber
 *
 * @example
 * addNumbers(1, 2);
 * // 3을 반환한다.
 */
const addNumbers = (firstNumber: number, secondNumber: number) => {
  return firstNumber + secondNumber;
};

addNumbers(1, 2);
