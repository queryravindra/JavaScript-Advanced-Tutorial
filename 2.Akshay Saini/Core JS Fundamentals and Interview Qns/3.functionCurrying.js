// 1. By using bind method

// let multiply = function(x, y) {
//     console.log(x * y);
// }

// // when we actually call the bind method it actually gives us the copy of this multiply method and it doesn't invoke it directly

// // let multiplyByTwo = multiply.bind(this, 2, 3);
// // multiplyByTwo(5);  // 6 

// // let multiplyByTwo = multiply.bind(this);
// // multiplyByTwo(2, 3);  // 6 

// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(5);  // 10 

// let multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(5);  // 15


// we make a copy of this multiply method and we create more methods out of it by presetting some arguments inside the function


// 2.By using function closures

// let multiply = function(x, y) {
//     console.log(x * y);
// }

let multiply = function(x) {
    // the below function has access to 'x' even after returning
    return function(y) {
        console.log(x * y);
    }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(5);  // 10 

let multiplyByThree = multiply(3);
multiplyByThree(5);  // 15
