describe('[Type Inference] 타입 추론', () => {
  it('타입을 명시하지 않아도 추론이 가능하다 ', () => {
    // given
    const inferMovieTitle = '듄';
    const declareMovieTitle = '듄' as const;

    expect(typeof declareMovieTitle).toBe(typeof inferMovieTitle);
  });
});
