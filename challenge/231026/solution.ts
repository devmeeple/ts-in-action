export const solution = {

    getElementsFromNthToEnd(num_list: number[], n: number) {
        return num_list.slice(n - 1);
    },
    findIntegerInList(num_list: number[], n: number) {
        return num_list.includes(n) ? 1 : 0;
    },
    getLastNCharacters(my_string: string, n: number) {
        return my_string.slice(-n);
    },
    appendModifiedLastElement(num_list: number[]) {
        const last = num_list[num_list.length - 1];
        const secondLast = num_list[num_list.length -2];

        const newValue = last > secondLast ? last - secondLast : last * 2;
        num_list.push(newValue);

        return num_list;

    }
};