describe('클래스 정의하기', () => {
  it('선언된 클래스를 확인한다', () => {
    // given
    const music = Music.of('아이유', 'Love is all');

    expect(music).toBeInstanceOf(Music);
    expect(music.getSongInfo()).toEqual(
      '현재 재생중인 노래는 아이유의 Love is all입니다.',
    );
  });
});

class Music {
  private readonly artist: string;
  private readonly song: string;

  private constructor(artist: string, song: string) {
    this.artist = artist;
    this.song = song;
  }

  static of(artist: string, song: string): Music {
    return new Music(artist, song);
  }

  getSongInfo() {
    return `현재 재생중인 노래는 ${this.artist}의 ${this.song}입니다.`;
  }
}
