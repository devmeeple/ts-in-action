import {solution} from './231030_solution';

describe('231030 문제풀이', () => {
    describe('접미사인지 확인하기', () => {
        it.each([
            { my_string: 'banana', is_suffix: 'ana', expected: 1 },
            { my_string: 'banana', is_suffix: 'nan', expected: 0 },
            { my_string: 'banana', is_suffix: 'wxyz', expected: 0 },
            { my_string: 'banana', is_suffix: 'abanana', expected: 0 },
        ])
        ('$is_suffix가 $my_string에 포함여부 $expected를 반환한다.', ({ my_string, is_suffix, expected}) => {
            // given

            // when
            const result = solution.isSuffixPresent(my_string, is_suffix);

            // then
            expect(result).toStrictEqual(expected);
        });
    });

    describe('접두사인지 확인하기', () => {
        it.each([
            {my_string: 'banana', is_prefix: 'ban', expected: 1},
        ])
        ('접두사라면 1, 아니면 0을 반환한다.', ({ my_string, is_prefix, expected}) => {
            // given

            // when
            const result = solution.isPrefixPresent(my_string, is_prefix);

            // then
            expect(result).toStrictEqual(expected);
        });
    });

    describe('글자 이어 붙여 문자열 만들기', () => {
        it.each([
            {my_string: 'zpiaz', index_list: [1, 2, 0, 0, 3], expected: 'pizza'},
            {
                my_string: 'cvsgiorszzzmrpaqpe',
                index_list: [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7],
                expected: 'programmers',
            },
        ])
        ('인덱스의 글자들을 순서대로 이어 붙인 문자열을 반환한다.', ({my_string, index_list, expected}) => {
            // given

            // when
            const result = solution.concatLettersByIndices(my_string, index_list);

            // then
            expect(result).toStrictEqual(expected);
        });
    });

    describe('뒤에서 5등까지', () => {

        it('정렬하고 앞에 5개를 반환한다.', () => {
            // given
            const num_list = [12, 4, 15, 46, 38, 1, 14];
            const expected = [1, 4, 12, 14, 15];

            // when
            const result = solution.getFiveSmallestNumbers(num_list);

            // then
            expect(result).toStrictEqual(expected);
        });
    });
});