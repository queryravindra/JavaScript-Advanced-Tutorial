// 1)
// const myName = "Ravindra";

// function printName() {
//     console.log(myName);   // Ravindra
// };

// printName();




// 2) most recent value (but it is not the best way of creating every variable individually)
// let myName = 'Ravindra';

// function printName() {
//     console.log(myName);
// };

// myName = 'Joey';

// printName();   // Ravindra

// myName = 'Phanindra';

// printName();   // Phanindra


// 3.
// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log('Outer Variable: ' + outerVariable);
//         console.log('Inner Variable: ' + innerVariable);
//     }
// }

// const newFunction = outerFunction('outside');

// // console.log(outerVariable);   // Uncaught ReferenceError: outerVariable is not defined

// newFunction('inside');


// 4)

// function outerFunction(outerVariable) {
//     fetch('url').then(() => {
//         console.log(outerVariable);
//     })
// }

// const newFunction = outerFunction('outside');
// newFunction(inner); 


function outerFunction(url) {
    fetch(url).then(() => {
        console.log(url);
    })
}

const newFunction = outerFunction('outside');
newFunction(inner); 