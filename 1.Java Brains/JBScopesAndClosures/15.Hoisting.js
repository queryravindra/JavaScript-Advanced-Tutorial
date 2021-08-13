a = 10;
console.log(b);
c++; // it is read operation + write operation (takes value 'c' increases its value by 1 and assigns to 'c')

var a;
var b;
var c;

// point of hoisting is it really doesn't matter that you have the var 'a','b','c' declared at the very bottom
// since whole execution is a two step process and the compilation is the first step,it gets to this var's first anyway it gonna skip the first part and return to vars

// it is almost as if you have the var's at the very top for the compiler to run and then after the var's are processed only then would the interpreted step ran and process these things

// the idea is it doesn't matter where you declare the var's. its always almost as of its hoisted to the top thats the whole concept of hoisting

// this works both for functions as well as variables

var a;
var b;
var c;

a = 10;
console.log(b);
c++;

// this works both for functions as well as variables

myFn1(); //before the function declaration

function myFn1() {
    ______;
}

// still works fine becz this function can execute even though function declaration is below,this is especially important when you are dealing with recursive functions with two or more functions(when you have two functions funcA and funcB then funcA calls B() and funcB calls A())

function fnA(){

    fnB();
}

function fnB(){

    fnA();
}

// this happens for function declarations only not for function expressions

fnA(); // ignores this variable becz no new variable created

var fnA = function() {

};

// comes to line 50 and looks at 'var fnA' and it creates var called fnA in global scope and it doesn't know what type it is,it doesn't do the assignment becz it is job of interpreter

// it creates empty variable in global scope which has a value of undefined obviously and then compiler says ok done now interpreter you go ahead with your thing and the interpreter tries to execute fnA() and it is undefined this is not gonna work, this works if it is a function declaration

fnA(); 

function fnA(){

};

// now it works
// it doesn't work if it is a function expression becz expression it gets interpreted by the interpreter but not the compiler which actually assigns the value

// **REMEMBER: A function declaration results in a function object being created in the compilation step itself


