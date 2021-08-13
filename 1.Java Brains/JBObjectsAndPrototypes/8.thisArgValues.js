// Lets talk about execution context in javascript

// This is actually a concept in most of the programming languages when there is a function 
// thats called It is always called in a particular context.In a lot of classical programming languages 
// there are something like a stack trays.there is a stack of variables which can contain values for 
// different scopes that have been a part of that call chain and there are bunch of other stuff.
// the information that it maintains but the idea is there is some context, some group of data which helps the 
// execution of a particular function and the function might sometimes need to refer to it

// so,javascript also has an execution context and the contents of that execution context really depend on the 
// method in which the function is called.In any one of these four ways and one of the variables, 
// one of the elements that execution context is a variable called 'this'

// If you have been working with JS or you have seen some of my other courses in JS,you will know that there is an 
// implicit argument to any function execution and that argument is called 'this'

// There are two default arguments to every function call: arguments and this

// so,anytime you make a function execution there is always an implicit argument called this
// any time you write a function you can use 'this' variable and it always point to something what the 
// thing is really depends on which one of these methods you are using

function foo() {
    console.log('Hello');
    console.log(this);
}

foo();  // Method #1

// I am executing a function as simple function object directly
// when a function is executing like this using first approach the value 'this' keyword is the global object
// the global object itself depends on the runtime environment you are using
// if you are running javascript in a browser the global object is window object which represents the tab or 
// the window actually running the javascript code

// method 1: Calling standalone functions directly
// this reference: The global object




var obj = { "prop": "This is the object itself!" };

obj.foo = function() {
    console.log("Hello");
    console.log(this);
};

obj.foo();  // Method #2

// If you are calling a function in the context of an object then when that function is called the this reference 
// is actually referring to the object itself(in this case 'obj')

// method 2: Calling functions as property of an object reference
// this reference: The object reference




function foo() {
    // var this={};
    console.log('Hello');
    console.log(this);
    // return this;
}

new foo();  // Method #3

// whenever you call a function using new keyword 'this' always refers to the newly created object

// method 3:Calling standalone functions using 'new' keyword
// this reference: The newly created object  i.e, empty object

// Method #4   ---> after discussing this
foo.call();