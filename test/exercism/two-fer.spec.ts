import { twoFer } from '../../src/exercism/two-fer';

describe('TwoFer', () => {
  it('이름을 작성하지 않으면 기본 메시지를 반환한다', () => {
    // given

    // when
    const sut = twoFer();

    // then
    expect(sut).toEqual('One for you, one for me.');
  });

  it('이름을 작성하면 작성한 이름을 포함한 메시지를 반환한다', () => {
    // given
    const name = 'Alice';

    // when
    const sut = twoFer(name);

    // then
    expect(sut).toEqual('One for Alice, one for me.');
  });
});
