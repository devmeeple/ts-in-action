function add(num1: number, num2: number) {
    return num1 + num2;
}

console.log(add(1, 2));
// console.log(add(1, '2')); // TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.