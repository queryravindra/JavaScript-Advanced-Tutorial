// 1.Result is as you expected

var x = 7;

function getName() {
    console.log("Namaste Javascript");
}

getName();   // Namaste Javascript
console.log(x);  // 7



// 2.but when you do this below one without initialising anything

getName();   // Namaste Javascript
console.log(x);  // undefined

var x = 7;

function getName() {
    console.log("Namaste Javascript");
}


// 3. 

getName();   // Namaste Javascript
console.log(x);  // Uncaught ReferenceError: x is not defined

function getName() {
    console.log("Namaste Javascript");
}

// Note: not defined and undefined are not same

// These all interested thing is known as Hoisting in Javascript

// Hoisting is a phenomenon in Javascript by which you can access these variables and functions even before you have initialised it or you have put some value in it.you acn access it without any error

// wherever this ( var x ) is there in the program, it doesn't matter and you can just access it anywhere in the program


// 4.

var x = 7;

function getName() {
    console.log("Namaste Javascript");
}

console.log(getName)  // we are not invoking it ,we are just writting the method name and it actually prints the function itself

// output:  ƒ getName() {
//               console.log("Namaste Javascript");
//          }


// 5.

// console.log(getName);
// // output:  ƒ getName() {
// //               console.log("Namaste Javascript");
// //          } 

// var x = 7;

// 1.way to declare a function
function getName() {
    console.log("Namaste Javascript");
}


// If it is for variable logging before initialising variable it gave output as : undefined
// but for method name it gave same output as while declaring after initialising


// This whole concept lies in memory creation phase


// 6.

getName();  // Uncaught TypeError: getName is not a function
console.log(x); 
console.log(getName);

var x = 7;
// 2.way to declare a function
var getName = () => {
    console.log("Namaste Javascript");
}

// 3.way to declare a function
var getName2 = function () {
    // It to be behave like a variable
}

// when you are executing this piece of code,when the getName is an arrow function, so it behaves just like another variable but no as function
// just like undefined to x it to have undefined of getName

// only in case of proper function declarations it copies whole function and in the remaining other two function declarations it act as variable and it will be undefined



// x is not present in the memory and x is nowhere initialised in the program and you are trying to access the value of x i.e., not defined





// Demo of Call Stack

var x = 7;

function getName() {
    console.log("Namaste Javascript");
}

getName();
console.log(x);
console.log(getName);