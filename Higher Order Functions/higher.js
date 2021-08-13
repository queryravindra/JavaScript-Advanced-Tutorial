// function sing(callback) {
//     console.log("la la la la");
//     callback();
// }

// function meow() {
//     console.log("meow meow");
// }


// function sing(callback) {
//     console.log("la la la la");
//     if(callback) {
//         callback();
//     }
// }

// function meow() {
//     console.log("meow meow");
// }


function sing(callback) {
    console.log("la la la la");
    if(callback instanceof Function) {
        callback();
    }
}

function meow() {
    console.log("meow meow");
}

function setup() {
    sing(function() { console.log("meow meow"); });
}

// Function factories( function returning a function )

// function multiplier(x, factor) {
//     return x * factor;
// }

function multiplier(factor) {
    return function(x) {
        x * factor;
    }
}