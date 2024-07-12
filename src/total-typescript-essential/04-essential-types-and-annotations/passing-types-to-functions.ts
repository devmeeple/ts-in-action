// 1. Passing Types to Map

type User = {
  name: string;
  age: number;
};

const userMap = new Map<number, User>();

// 2. `JSON.parse()` Can't Receive Type Arguments
