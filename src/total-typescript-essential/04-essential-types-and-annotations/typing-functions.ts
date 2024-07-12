// 1. Optional Function Parameters

const concatName = (first: string, last?: string) => {
  if (!last) {
    return first;
  }

  return `${first} ${last}`;
};

const result = concatName('John');

// 2. Default Function Parameters

const sumNumber = (first: number, second: number = 10) => {
  if (!second) {
    return first;
  }

  return first + second;
};

// 3. Rest Parameters

export function concatenate(...strings: string[]) {
  return strings.join('');
}

// 4. Function Types

type User = {
  id: string;
  name: string;
};

type MakeChangeFunc = (user: User) => User;

const modifyUser = (user: User[], id: string, makeChange: MakeChangeFunc) => {
  return user.map((u) => {
    if (u.id === id) {
      return makeChange(u);
    }

    return u;
  });
};
