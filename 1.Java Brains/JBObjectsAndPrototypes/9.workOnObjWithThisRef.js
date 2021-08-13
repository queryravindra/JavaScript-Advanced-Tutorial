// Function meant to be called in constructor mode
function Bicycle(cadence, speed, gear, tirePressure) {
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    this.inflateTires = function() {
        this.tirePressure += 3;
    }
}

// Calling the function in constructor mode
var bicycle1 = new Bicycle(50, 20, 4, 25);
bicycle1.inflateTires();

var bicycle2 = new Bicycle(50, 20, 4, 30);
bicycle2.inflateTires();


// Before we moveon there is an important distinction that gonna going to point out
// each function could have a different this reference eventhough there is one function inside the other function
// If you look at the code here there is one top level function which is what the constructor is being called on the constructor mode

// function Bicycle(cadence, speed, gear, tirePressure) {
//     this.cadence = cadence;
//     this.speed = speed;
//     this.gear = gear;
//     this.tirePressure = tirePressure;
//     this.inflateTires = function() {
//         this.tirePressure += 3;
//     }
// }

// and there is an inner function which is not being called on constructor mode

// this.inflateTires = function() {
//     this.tirePressure += 3;
// }

// since there are two functions it is possible for the this reference of those two functions to be 
// different and they actually are the this reference of the constructor function is the new object that 
// gets created when the functions is called on constructor mode

// but as the this reference of the inflateTyres() function is the object is on whose property the inflateTyres() is being called

// It is important for you to remember that every function could have a different this reference,
// just becz of one function is inside the other function it doesn't mean that they have same this reference