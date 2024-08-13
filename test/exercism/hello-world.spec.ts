import { hello } from '../../src/exercism/hello-world';

describe('Hello World', () => {
  it('Hello, World 메시지를 반환한다', () => {
    // given

    // when
    const sut = hello();

    // then
    expect(sut).toEqual('Hello, World!');
  });
});
