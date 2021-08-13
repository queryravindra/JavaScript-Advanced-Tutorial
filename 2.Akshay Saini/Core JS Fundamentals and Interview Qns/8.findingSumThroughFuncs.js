// sum(10)(20)(8)(32)();

// let sum = function(a) {
//     return function(b) {
//         if(b) {
//             return sum(a+b);
//         }
//         return a;
//     }
// }

let sum = function(a) {
    return function(b) {
        return b ? sum(a+b) : a;  
    }
}

console.log(sum(10)(20)(8)(32)());  // 70

// Es6

let es6sum = a => b => b ? sum(a+b) : a;

console.log(sum(10)(20)(30)(40)());   // 100
