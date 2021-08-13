// Pure and Higher-Order Functionsin JavaScript
/******************************************
 * PURE functions
 * 1.Given the same input will always return the same output
 * 2.Have no side effects ( only access the data that is passed to it)
 * 
 * 
 * HIGHER-ORDER functions
 * 1.May accept functions as parameters
 * 2.Will return a function
 * ****************************/


let str = 'Some String';

let f_pure = function(_input) {
    let _output = _input.toUpperCase();
    return _output;
}

let f_impure = function(_input) {
    let _output = _input.toUpperCase();
    str = _output;  // side-effect(str outside the scope)
    return _output;
}

let pure_out = f_pure(str);
console.log(pure_out, str);

let impure_out = f_impure(str);
console.log(impure_out, str);



// higher

let higher = function(f) {
    let _output = _input.toUpperCase();
    return _output;  // if _output is a function
}

let x = function() {
    console.log('x');
    return function() {
        console.log('x return value');
    }
}

higher(x)