// ex-1
var top = 10;

// function declaration
function foo(){
    var inner = 20;
    console.log(inner)
}

// what is the value gets printed in the console from above
// Answer is nothing gets printed in the console if we execute the above code, becz we haven't executed it
// In order to execute it we have to call the above function

// ex-2
var top = 10;

function foo(){
    var inner = 20;
    console.log(inner)
}

foo();  // 20

// ex-3
var top = 10;
var inner = 50;

function foo(){
    var inner = 20;
    console.log(inner)
}

foo();  // still 20

// ex-4
var top = 10;
var inner = 50;

function foo(){
    var inner = 20;
}

foo();  
console.log(inner); // 50

// ex-5
function myFn(){
    var a = 10;
    var b = 10;
    console.log(a + b);
}

myFn();

// ex-6
var name = 'Ravindra'

// what name do here? - creating a variable of local Scope by accepting argument
// method argument is actually creating a new var of local
function printGreeting(name){
    console.log("Hello " + name);
}

printGreeting("Phanindra");