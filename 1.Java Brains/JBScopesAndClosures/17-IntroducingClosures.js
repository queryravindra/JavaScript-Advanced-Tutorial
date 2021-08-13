// var a = 10;

// function outer() {
//     var b = 20;

//     function inner() {
//         console.log(a); // var a is not inside innerscope it checks in outer and then goes global
//         console.log(b); // it checks for var b in inner and goes one level up and then checks scope of outer
//     }
//     inner();
// }

// outer();  // 10
//           // 20 


var a = 10;

function outer() {
    var b = 20;

    var inner = function() {
        console.log(a); 
        console.log(b); 
    }
    return inner();
}

var innerFn = outer();  //Executing outer

innerFn();  // 10
            // 20


 // what the function remembers is the scope during the time of the declaration