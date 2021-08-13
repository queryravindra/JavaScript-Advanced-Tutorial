// compilation step is just worried about variable declaration or it examines variable declaration in this case

// 1.The compilation step in this code has basically registered two variables 'a' and 'b' in the global state
// compilation step doesn't bother with the R.H.S ,just it looks for 'var' keyword i.e, 'var a'
// and 'var b'
var a = 10;

var b = 20;

console.log(a + b);

// 2. how many var declarations being declared below??
// if you say ans is 3 then you are missing one var decln
// there is another variable declaration, 'var' is where you explicitly create a variable of your own but there are a bunch of things which also end up creating variables i.e., function declaration with name 'myFn'
// actually functions are objects in javascript,the minute you create a function actually creating a sort of a variable which contains that object
// thus function declaration actually results in javascript creating this variable called 'myFn' and binding it to this function object
// 4th hidden variable decln is myFn

var a = 10;

function myFn(){
    var b = 20;
    var c = b;
    console.log(a + b);
}

myFn();

// var 'a' will register 'a' to the global scope, 'myFn' will register to the global scope, where  while registering 'b' it will not register in Global scope,it will register in the scope of myFn scope

// 3.How many variables are created below??
// If you say answer is 2 i.e., var 'myName' and new var called greet(from last case) which refers to the function
// there is actually third variable called 'name', even though you are not using a 'var' here the fact of you creating a method argument means that there is a variable gets created when that method gets executed
// when I call greet over here and passing a value, then that value gets assigned to this variable.so there is name variable created over here and lets assign the value passed and you will use over here

var myName = 'Ravindra';

function greet(name){
    console.log("Hello, " + name);
}

greet(myName);

// from above first creates var myName in global scope then creates scope for greet
// atlast the first 'name' registers here(registers name in the scope of greet)