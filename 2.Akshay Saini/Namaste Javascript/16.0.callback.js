// 1.What is a Callback Function in Javascript?

// when you pass a function into another function is known as callback function
// This call back functions are very powerful in javascript
// It gives its access to the whole asynchronous world in a synchronous single threaded language
// we will do one thing at a time and in a specific order i.e., synchronous single-threaded language but due to callbacks we can do async things inside javascript

function x(y) {

}
x(function y() {

})

// this function y overhere is the callback function

// setTimeout takes a callback function 
// this function over here which you pass is the first parameter to the setTimeout is the callback function
// It is passed to setTimeout and it is called sometime else in our program and when after certain amount of time which you pass as a second argument(which is the no of milli seconds)

setTimeout(function () {
    console.log("timer");
}, 5000)

function x(y) {
    console.log("x");
    y();
}
x(function y() {
    console.log("y");
})
// output:
// x
// y
// timer

// setTimeout Asynchronous operation was not possible without these callback functions

// Js has only one call stack and you can call it as main thread
// Everything whatever is executed inside your page is executed through the call stack only
// If you run anything x,y and callback function inside setTimeout Everything will be executed through callstack
// so if any operation blocks the call satck that is known as blocking the main thread
// so using this webAPI's,the setTimeout and the callback functions we can achieve this asynchronous operations


// and as you already know that javascript wont wait for setTimeout to finish overhere that is why i say that callback function gives us the power of asynchronity.it doesn't wait overhere for 5000ms to expire and whatever needs to be done after 5000ms we are passing that feature or those piece of code or those line of code as a callback function to the setTimeout,it willl be executed later
// Javascript waits for none




// 2.Javascript is synchronous and single-threaded language

// 3.Blocking the main thread

// 4.Power of Callbacks?

