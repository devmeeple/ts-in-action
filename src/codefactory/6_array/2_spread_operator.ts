/**
 * Spread Operator
 */
const onlyStrings = ['1', '2', '3'];
const onlyNumbers = [1, 2, 3, 4];

const arr1 = [...onlyStrings];

const arr2 = [...onlyNumbers, ...onlyStrings];
