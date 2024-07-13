// 1. string or null

type User = string | null;

function getUsername(user: User) {
  if (user !== null) {
    return `User: ${user}`;
  } else {
    return 'Guest';
  }
}

const result1 = getUsername('Alice');
const result2 = getUsername(null);

// 2. Restricting Function Parameters

type Direction = 'up' | 'down' | 'left' | 'right';

function move(direction: Direction, distance: number) {}
