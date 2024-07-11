const acceptsObj = (obj: { foo: string; bar: number; baz: boolean }) => {};

acceptsObj({
  foo: 'foo',
  bar: 1,
  baz: true,
});
