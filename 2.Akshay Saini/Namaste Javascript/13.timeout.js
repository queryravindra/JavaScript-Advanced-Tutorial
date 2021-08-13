function x() {
    var i = 1;
    setTimeout(function() {
        console.log(i);
    },1000)
}
x();

// print 1 after 1sec


// 2.
function x() {
    var i = 1;
    setTimeout(function() {
        console.log(i);
    },3000)
    console.log("namaste Javascript");
}
x();

// output:
// Namste Javascript (after 3sec it prints 1)
// 1


// 3.
function x() {
    for(var i=0; i<=5; i++){
        setTimeout(function() {
            console.log(i);
        }, i * 1000)
    }
    console.log("namaste Javascript");
}
x();


// 14.index.js  
//  4.constructor counter
function Counter() {
    var counter = 0;
    this.incrementCounter = function (){
        count++;
        console.log(count);
    }
    this.decrementCounter = function (){
        count--;
        console.log(count);
    }
}

// var counter1 = counter();
// this is a constructor function,so we have to use a new keyword
var counter1 = new Counter();

counter1.incrementCounter();
counter1.incrementCounter();

counter1.decrementCounter();
