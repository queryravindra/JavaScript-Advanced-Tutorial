// 1
var a = 10;

function outer() {
    var b = a;
    console.log(b);
    function inner() {
        var b = 20;
        var c = b;
        console.log(c);
    }
    inner();
}

outer();

// Note: 'a' and 'outer' scope in global
// 'b' and 'inner' scope in outer scope
// 'b' and 'c' scope in inner scope

// output: 10
//         20


// 2.
var a = 10;

function outer() {
    var b = a;
    console.log(b);
    function inner() {
        var c = b;
        console.log(c); // remember not 10
        var b = 20;
    }
    inner();
}

outer();

// output: 10
//         undefined

// for this you have to draw the diagram of compiler and analyze role of interpreter

// Note: 'a' and 'outer' scope in global
// 'b' and 'inner' scope in outer scope
// 'c' and 'b' scope in inner scope

// the above one happens before the interpreter
// when the interpreter enters inner it lookup for 'c' ,it had 'c' then it gives 'c'
// then it lookup for 'b' then it gives 'b' becz it has 'b' even 'var b' is below it doesn't matter becz it had already 'b',the compiler already had passed(traverse) the code once
// At the first time(when assigned to 'b') what is the value of 'b',it is undefined 
// remember that it has two passes in the code

//3

console.log(a); // read access of a variable that is not declared(read mode on undeclared variable) i.e, actually it throws an error, but it is not that it has a global scope variable 'a' so this doesn't give error
var a = 10;

//output: undefined

// becz interpreter has not gone through line-59 which actually assigns the value '10' to 'a'
// when console.log(a) prints it prints 'undefined' but still it results in an existing variable and it doesn't give an error