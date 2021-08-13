//  1.
function x() {
    console.log("Namaste");
}

function y() {
    x();
}

// here y is higher order function and x is callback function

// 2.calculate radius of all these circles

const radius = [3, 1, 2, 4];

// since most of the members will do
const calculateArea = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
};

console.log(calculateArea(radius));

// so, this code is perfectly fine, now i show you that as the code grows what mistakes people makes
const calculateCircumference = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++){
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
};

console.log(calculateCircumference(radius));

// This is how generally people write in interviews
const calculateDiameter = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
};

console.log(calculateDiameter(radius));

// this is how generally lot of people do but this is not a good way
// can you see a problem here?
// What an interviewer expects from you in a coding round..

// what is modular code?
// what is reusable code?
// How you can write it in a functional way?

// Lets see what are the problems over here?
// The first problem which you can obviously see and easily would hint out is that we are repeating ourselves alot

// so there is a principle in software engineering which is `DRY Principle`
//    ==> ' Dont Repeat Yourself '

// Almost these three functions have almost 90% of code same isn't it
// What change is a logic of Area, logic of Circumference, logic of Diameter or maybe something else
// The only thing is changing is that logic
// so can we write it in a better way or optimized way? Lets see

// we are creating an array and iterating through array again and again

// 20.1