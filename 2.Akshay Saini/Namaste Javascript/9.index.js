// 1.

console.log(b);
let a = 10;
var b = 100;

// the memory is allocated to these variables and functions even before a single line of code executed

// 2.

console.log(a);   // Uncaught ReferenceError: Cannot access 'a' before initialization
let a = 10;
var b = 100;


// 3.

const b;

b = 1000;

// Uncaught SyntaxError: Missing initializer in const declaration

// 4.
const b = 1000;

b = 10000;
