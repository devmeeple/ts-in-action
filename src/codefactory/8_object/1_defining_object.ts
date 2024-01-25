/**
 * Object
 */
const meeple = {
  name: '미플',
  age: 27,
};

interface IPerson {
  name: string;
  age: number;
}

type TPerson = {
  name: string;
  age: number;
};

const iPerson: IPerson = {
  name: '아이유',
  age: 30,
};

const tPerson: TPerson = {
  name: '유인나',
  age: 30,
};

iPerson.name;
tPerson.age;
