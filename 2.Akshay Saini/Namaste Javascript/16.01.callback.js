// 5.Deep about Event listeners

// 6.Closures Demo with Event listeners

// 7.Scope Demo with Event listeners


// The function in addEventListener is a callback function
// this callback function stores somewhere and automatically comes into callstack


// document.getElementById("clickMe").addEventListener("click", function xyz() {
//     // Now we attach this eventhandler to this button
//     console.log("Button Clicked");
// })

// Closures Demo along with Event Listeners

// famous Interview question
// count that how many times button was clicked

let count = 0;

document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button Clicked", ++count);
})

// but using a global variable is not a good solution
// how can we make a closure and ensure that this count can't be modified(secured) by any other thing inside our program.so, we use Closure for data hiding
// for that what we need to do,we can wrap this whole thing inside a function

function attachEventListeners() {
    let count = 0;

    document.getElementById("clickMe").addEventListener("click", function xyz() {
        console.log("Button Clicked", ++count);
    })
}

// Now this callback function over here is forming a Closure with its outer scope

attachEventListeners();



// 8.Garbage Collection and removeEventListeners

// Interview qn: Why do we need to remove Event listeners?Why many coders do that?

// Event listeners are heavy
// When I say heavy that means it takes memory
// Whenever you attach Event listener it forms a closure even when the call stack is empty but still this program not freeing up the memory
// It cannot free up this count becz you never know somebody on this page can click on this button and we will need this closure to count this
// so in this case we cannot free up this extra memory that is why event listeners are heavy,so that is the main reason why we remove Event listeners when we are not using them
// so when you remove this Event listener then all these variables which are held by this closure will be garbage collected