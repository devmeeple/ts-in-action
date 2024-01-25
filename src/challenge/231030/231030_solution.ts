export const solution = {
  isSuffixPresent(my_string: string, is_suffix: string) {
    /**
     * 1) 배열 혹은 enum 을 만들고 접미사를 정의한다.
     * 2) is_suffix 가 정의된 접미사 구조에 일치하는지 여부를 확인한다.
     * 3) 일치하면 1, 일치하지 않으면 0을 반환한다.
     *
     * Array.from + substring + some 조합으로도 문제를 해결할 수 있다.
     */
    return my_string.endsWith(is_suffix) ? 1 : 0;
  },
  isPrefixPresent(my_string: string, is_prefix: string) {
    return my_string.startsWith(is_prefix) ? 1 : 0;
  },
  concatLettersByIndices(my_string: string, index_list: number[]) {
    return index_list.map((index) => my_string[index]).join('');
  },
  getFiveSmallestNumbers(num_list: number[]) {
    /**
     * 1) 작은 순서로 정렬한다.
     * 2) 앞에 5개를 자른다.
     */
    return num_list.sort((a, b) => a - b).splice(0, 5);
  },
};
