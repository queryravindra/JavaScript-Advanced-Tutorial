// what are the different ways in which we can call functions in javascript
// there are four different ways in which we can call a function in javascript
// we have looked at two ways one is what i call regular mode and second one is calling a constructor

function foo() {
    console.log('Hello');
}

// By calling a function as is
foo();  // Method #1

var obj = {};

obj.foo = function() {
    console.log("Hello");
};

// Referring to a function as a prop of an object and executing it
obj.foo();  // Method #2

// Executing a function as a constructor by attaching a new keyword to that execution
new foo();  // Method #3

// Method #4   ---> after discussing this