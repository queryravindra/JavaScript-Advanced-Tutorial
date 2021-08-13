// var i;

// var print = function() {
//     console.log(i);
// };

// for(i=0; i<10; i++){
//     // IIFE
//     (function(){
//         setTimeout(print, 1000); 
//     })();
// }

// output: prints 10 for ten times

// It is actually creating a scope for this FE
// There is a scope that created for each execution of the for loop

// var i;

// // conver the function to inline function rather than function object
// // var print = function() {
// //     console.log(i);
// // };

// for(i=0; i<10; i++){
//     // IIFE
//     (function(){
//         setTimeout(function(){
//             console.log(i);
//         }, 1000); 
//     })();
// }

// output: still 10 prints 10 times

// var i;

// for(i=0; i<10; i++){
//     (function(){
//         var currentValueOfI = i;

//         setTimeout(function(){
//             console.log(currentValueOfI);
//         },1000);
//     })();
// }

var i;

for(i=0; i<10; i++){
    (function(currentValueOfI){
        setTimeout(function(){
            console.log(currentValueOfI);
        },1000);
    })(i);
}