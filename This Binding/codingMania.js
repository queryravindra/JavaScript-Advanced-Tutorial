// Understanding 'this' keyword: Types of bindings

// 1)
// var user = {
//     name: 'Peter',
//     age: 22,
//     changeAge: function(newAge) {
//         this.age = newAge;
//     }
// }

// // Implicit Binding
// user.changeAge(23);
// console.log(user);



// 2)
// function changeName(newAge) {
//     console.log(this);  // window object
//     this.age = newAge;
// }

// var user = {
//     name: 'Peter',
//     age: 22
// }

// // Default Binding
// changeName(24);

// console.log(user);



// 3)
function changeAge(newAge) {
    this.age = newAge;
}

var user = {
    name: 'Peter',
    age: 22
}

// Explicit Binding
// 1st way: Call
changeAge.call(user, 25);

// 2nd way: bind
var f2 = changeAge.bind(user);
f2(28);

// 3rd way: apply

console.log(user);



// 
(function(self){
    'use strict';
    console.log(self)
    return self;
})(this);