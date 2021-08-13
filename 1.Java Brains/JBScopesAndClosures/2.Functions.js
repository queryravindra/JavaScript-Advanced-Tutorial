// 1.function declaration
function foo() {
    console.log('Function foo called');
}

// another way of creating a function is function expression
// javascript has first class functions i.e., you can create a function and assign it too a variable

// whats heppening below??
// Initialising a function and assigning it to a variable but its not exexuting the function and assigning the result to variable
// the reason it works in JS becz the functions in javascript are actually objects and instance of function is actually an object instance

var bar = function() {
    console.log('Function bar called');
};

foo();

bar();