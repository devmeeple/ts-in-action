// 1. Narrowing with if Statements

function validateUsername(username: string | null): boolean {
  const isUsernameOk = typeof username === 'string';

  if (isUsernameOk) {
    return username.length > 5;
  }

  return false;
}

// 3. Using in to Narrow

type APIResponse =
  | {
      data: {
        id: string;
      };
    }
  | {
      error: string;
    };

const handleResponse = (response: APIResponse) => {
  if ('data' in response) {
    return response.data.id;
  } else {
    throw new Error(response.error);
  }
};
