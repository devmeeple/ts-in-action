const concatName = (user: { first: string; last: string }) => {
  return `${user.first} ${user.last}`;
};

const concatNameWithOptional = (user: { first: string; last?: string }) => {
  if (!user.last) {
    return user.first;
  }

  return `${user.first} ${user.last}`;
};
