/** 
 * HIGHER ORDER function
 * -> function which takes another function as an argument is called HOF
 * 
 * 
 * CALLBACK function
 * -> function which get passed as an argument to a function is called CBF
 * 
 */

const add = (a, b) => {
    return a+b;
}

const sub = (a, b) => {
    return Math.abs(a-b);
}

const mult = (a, b) => {
    return Math.abs(a*b);
}

// master function HOF

const calculator = (num1, num2, operator) => {
    return operator(num1, num2);
}

console.log(calculator(5, 6, add));
console.log(calculator(5, 6, mult));