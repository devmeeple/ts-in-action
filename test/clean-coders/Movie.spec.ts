import { Movie } from '../../src/clean-coders/Movie';

describe('Movie', () => {
  let movie: Movie;

  beforeEach(() => {
    movie = new Movie();
  });

  it('영화 개봉 직후 평점은 0이다', () => {
    // when
    const act = movie.averageRating();

    // then
    expect(act).toBe(0);
  });

  it('1점 부여한 직후 평점은 1점이다', () => {
    // given
    movie.rate(1);

    // when
    const act = movie.averageRating();

    // then
    expect(act).toBe(1);
  });

  it('3점, 5점을 부여하면 평점은 4점이다', () => {
    // given
    movie.rate(3);
    movie.rate(5);

    // when
    const act = movie.averageRating();

    // then
    expect(act).toBe(4);
  });
});
