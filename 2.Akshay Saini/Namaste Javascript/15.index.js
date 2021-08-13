// 1.Function statement
// Function statement a.k.a Function Declaration

function a() {
    console.log("a called");
}
a();
// a called

// This way of creating a function is known as a function statement


// 2.Function Expression
// we can assign a function to a variable
// it is like value
// you are initialising b with a value

var b = function () {
    console.log("b called");
}
b();
// b called

// this is known as function expression

// the major difference between function statement and function expression is Hoisting

a();
b();

function a() {
    console.log("a called");
}

var b = function () {
    console.log("b called");
}
b();

// a called
// Uncaught TypeError: b is not a function

// During the memory creation phase a is created a memory and this(above first function) function is assigned to a but in case of function expression this b is treated like any other variable,it is assigned undefined initially untill the code hits this line itself(33)
// when the javascript engine executes this line by line and it reaches this line(33) then only this function(above second function) is assigned to variable b untill the it is undefined
// this is what the major diff between function expression and function statement

// 3.Function Declaration

// Function Statement is also known as Function Declaration


// 4.Anonymous Function

// A function without a name is known as anonymous function

// function () {

// }
// Uncaught SyntaxError: Function statements require a function name

// this is anonymous function
// anonymous function doesn't have their own identity that means if you craete an anonymous function like this(above) ,this will result out to be a syntax error(why?)
// An anonymous function looks like a function statement but it has no name but according to Ecmascript specification a function should have a name so this is a invalid syntax
// when you cant create like this then what is the use of this?
// so Anonymous functions used in a place where functions are used as values
// you can use it to assign it to some variable,so it acts like a value here you can use anonymous functions. but incase of function statement you can't use an anonymous function


// 5.Named Function Expression

// Named function expression is exactly same as function expression but when instead of using anonymous function here we use a function with a name this becomes named function expression

// there is a gocha

var b = function xyz() {
    console.log("b called");
}

b();
xyz();

// b called
// Uncaught ReferenceError: xyz is not defined

// xyz is not created in the outer scope,so this xyz is not a function inside the outer scope(global scope) but it is created as a local variable
// if you want to access this function you can access like this

var b = function xyz() {
    console.log(xyz);
}

b();

// ƒ xyz() {
//     console.log(xyz);
// }

// xyz();
// but if you use to access like this outside it will throw an error


// 6.Difference between Parameters and Arguments?

// whenever you are creating a function whatever you put over here these identifier or these label over here are known as parameter

// param1 and param2 are local variables inside this function(function scope), you cannot access this param1 and param2 outside
// 'param1' this identifier or the label or this variable are parameters of a function

var b = function (param1, param2) {
    console.log("b called");
}

b(1, 2);
// these are known as arguments (1, 2)
// the values which we pass inside the function are known as arguments and these labels or identifiers which get thos values are known as parameters




// 7.First Class Functions
// what are first class functions?

// Instead of this arguments we can even pass functions inside another functions as an argument
// functions are treated as values
// you can use anonymous function to pass in as a value also

var b = function (param1) {
    console.log(param1);
}

b(function (){

});

// output:
// ƒ (){

// }

// ii.you can pass it also like this
var b = function (param1) {
    console.log(param1);
}

function xyz(){

}

b(xyz);

// output:
// ƒ xyz(){

// }

// iii. we can return anonymous function from a function
var b = function (param1) {
    return function () {

    }
}

console.log(b());
// output:
// ƒ () {

// }

// iv.

var b = function (param1) {
    return function xyz() {

    }
}

console.log(b());
// output:
// ƒ xyz() {

// }

// v.if we use let and const it behaves same way as normal variables do. they are in temporal dead zone until it encounters this statement(185)

var b = function (param1) {
    return function xyz() {

    }
}

console.log(b());

// The ability to use functions as values is known as first class functions
// The Ability of functions to be used as values and can be passed this as argument to another function and can be returned from the functions and this ability is known as first class functions in javascript
// The Ability of functions to be used as values and assign it to a variable and can be passed this as argument to another function and can be returned from the functions and this ability altogether is known as first class functions in javascript

// Functions are First Class Citizens referring to First Class Functions



// 8.Arrow Functions

// Function Statements and Function Expression or a Function Declaration these all things can also be returned using arrow functions also