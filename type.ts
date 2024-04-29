function pick<T, U extends keyof T>(data: T, keys: U[]): {[K in U]: T[K]} {
  const temp: any = {};
  for (const key of keys) {
    temp[key] = data[key];
  }
  return temp;
}

const user = {
  id: 1,
  name: 'John',
  age: 25,
  email: ''
}

pick(user, ['id'])