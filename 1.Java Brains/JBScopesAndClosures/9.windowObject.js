// Concept of Global Object
var a = 10; // global scope

// Global Object is a Root object which holds all these global variables and it depends on which Run time you are using, i am using chrome
// I am running javascript on the browser.so,when you run javascript on the browser the global object is usually the window object

// creating a property on global object
var abc = 100;
var def = "Hello window object";


//  In console access values by 'def' or 'window.def'

// Every Global variable is a property on Global object

// This concept also works for functions
function myFn(){
    console.log("Hello!");
}

// when you will creating variables globally that means you are creating properties on global object