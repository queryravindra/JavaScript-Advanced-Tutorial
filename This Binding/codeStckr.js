// 1.
// console.log(this);   // window object

// 2.
// function testThis() {
//     console.log(this);   // window
// }

// testThis();


// 3.
// "use strict"

// console.log(this);   // window object

// function testThis() {
//     console.log(this);   // undefined
// }

// testThis();



// 4.Object method
// const user = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName() {
//         console.log(this);   // user object
//         console.log(`${this.firstName} ${this.lastName}`);   // John Doe
//     }
// };

// user.fullName();



// 5.
// const user = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function() {
//         console.log(this);   // user object
//         console.log(`${this.firstName} ${this.lastName}`);   // John Doe
//     }
// };

// user.fullName();



// 6.Arrow function
// const user = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: () => {
//         console.log(this);   // window object
//         console.log(`${this.firstName} ${this.lastName}`);   // undefined undefined
//     }
// };

// user.fullName();



// 7.
// const user = {
//     firstName: "John",
//     lastName: "Doe",
//     pets: ["cat", "dog", "fish"],
//     listPets() {
//         this.pets.forEach(function(pet) {
//             console.log(pet);
//         });
//     }
// };

// user.listPets();



// 8.
// const user = {
//     firstName: "John",
//     lastName: "Doe",
//     pets: ["cat", "dog", "fish"],
//     listPets() {
//         this.pets.forEach(function(pet) {
//             console.log(`${this.firstName}'s ${pet}`);
//         });
//     }
// };

// user.listPets();

// // undefined's cat
// // undefined's dog
// // undefined's fish


// 9.
// const user = {
//     firstName: "John",
//     lastName: "Doe",
//     pets: ["cat", "dog", "fish"],
//     listPets() {
//         this.pets.forEach(function(pet) {
//             // In this context within the forEach() method we have another function(regular function) `function(pet)` that doesnot bind to the original object
//             // but to the global object
//             console.log(`${this.firstName}'s ${pet}`);
//         }, this);
//     }
// };

// user.listPets();

// John's cat
// John's dog
// John's fish



// 10.constructor function
function User(name) {
    this.name = name;
    console.log(this);  // User object
}

const newUser = new User("John")