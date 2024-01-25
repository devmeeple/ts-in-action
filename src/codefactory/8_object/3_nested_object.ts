/**
 * Nested Object
 */

type NestedPerson = {
  identity: {
    name: string;
    age: number;
  };
  nationality: string;
};

const meeple: NestedPerson = {
  identity: {
    name: '더글라스 크락포드',
    age: 13,
  },
  nationality: '한국인',
};

type TPerson = {
  identity: TPersonIdentity;
  nationality: string;
};

type TPersonIdentity = {
  name: string;
  age: number;
};

const iu: TPerson = {
  identity: {
    name: '미플',
    age: 17,
  },
  nationality: '한국인',
};

interface IPerson {
  identity: IPersonIdentity;
  nationality: string;
}

interface IPersonIdentity {
  name: string;
  age: number;
}

const yuJin: IPerson = {
  identity: {
    name: '안유진',
    age: 20,
  },
  nationality: '한국인',
};
