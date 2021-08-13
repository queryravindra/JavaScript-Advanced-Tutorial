// let name = {
//     firstName: "Ravindra",
//     lastName: "Reddy",
// }

// let printName = function() {
//     console.log(this.firstName + " " + this.lastName);
// }

// // our task is to own implementation of bind function
// let printMyName = printName.bind(name);
// printMyName();   // Ravindra Reddy


// Function.prototype.mybind = function(...args) {
//     // ...args is the array of arguments passed
//     // console.log(this)  -> printName()
//     // accessing printName() by `this` keyword
//     let obj = this;
//     return function() {
//         obj.call(args[0]);
//     }
// }


// let printMyName2 = printName.mybind(name);
// printMyName2();   // Ravindra Reddy


// *********************************************************************************************************************


// let name = {
//     firstName: "Ravindra",
//     lastName: "Reddy",
// }

// let printName = function(hometown) {
//     console.log(this.firstName + " " + this.lastName + " from " + hometown);
// }


// let printMyName = printName.bind(name, "Warangal");
// printMyName();   // Ravindra Reddy from Warangal


// Function.prototype.mybind = function(...args) {
//     let obj = this;
//     return function() {
//         obj.call(args[0]);
//     }
// }


// let printMyName2 = printName.mybind(name, "Vizag");
// printMyName2();   // Ravindra Reddy from undefined



// *********************************************************************************************************************


// let name = {
//     firstName: "Ravindra",
//     lastName: "Reddy",
// }

// let printName = function(hometown) {
//     console.log(this.firstName + " " + this.lastName + " from " + hometown);
// }


// let printMyName = printName.bind(name, "Warangal");
// printMyName();   // Ravindra Reddy from Warangal


// Function.prototype.mybind = function(...args) {
//     let obj = this;
//         params = args.slice(1);
//     return function() {
//         // obj.call(args[0], params);
//         // params is an array
//         obj.apply(args[0], params);
//     }
// }


// let printMyName2 = printName.mybind(name, "Vizag");
// printMyName2();   // Ravindra Reddy from Vizag


// *********************************************************************************************************************


// let name = {
//     firstName: "Ravindra",
//     lastName: "Reddy",
// }

// let printName = function(hometown, state) {
//     console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
// }


// let printMyName = printName.bind(name, "Warangal");
// printMyName("Telangana");   // Ravindra Reddy from Warangal, Telangana


// Function.prototype.mybind = function(...args) {
//     let obj = this;
//         params = args.slice(1);
//     return function() {
//         obj.apply(args[0], params);
//     }
// }


// let printMyName2 = printName.mybind(name, "Vizag");
// printMyName2("Andhra Pradesh");   // Ravindra Reddy from Vizag, undefined


// *********************************************************************************************************************


// let name = {
//     firstName: "Ravindra",
//     lastName: "Reddy",
// }

// let printName = function(hometown, state, country) {
//     console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state + ", " + country);
// }


// let printMyName = printName.bind(name, "Warangal");
// printMyName("Telangana", "India");   // Ravindra Reddy from Warangal, Telangana, India


// Function.prototype.mybind = function(...args) {
//     let obj = this;
//         params = args.slice(1);
//     return function(...args2) {
//         obj.apply(args[0], [...params, ...args2]);
//     }
// }


// let printMyName2 = printName.mybind(name, "Vizag");
// printMyName2("Andhra Pradesh", "India");   // Ravindra Reddy from Vizag, Andhra Pradesh, India


// *********************************************************************************************************************


let name = {
    firstName: "Ravindra",
    lastName: "Reddy",
}

let printName = function(hometown, state, country) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state + ", " + country);
}


let printMyName = printName.bind(name, "Warangal", "Telangana");
printMyName("India");   // Ravindra Reddy from Warangal, Telangana, India


Function.prototype.mybind = function(...args) {
    let obj = this;
        params = args.slice(1);
    return function(...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }
}


let printMyName2 = printName.mybind(name, "Vizag", "Andhra Pradesh");
printMyName2("India");   // Ravindra Reddy from Vizag, Andhra Pradesh, India


