// Regular function with new keyword

var bicycle1 = new createBicycle(50, 20, 4);

function createBicycle(cadence, speed, gear) {
     // var this = {};
    var newBicycle = {};
    newBicycle.cadence = cadence;
    newBicycle.speed = speed;
    newBicycle.gear = gear;

    return newBicycle;
    // return this;
}

function Bicycle(cadence, speed, gear) {
    // var this = {};
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;

    // return this;
}

var bicycle3 = new Bicycle(50, 20, 4);

// Calling a regular function in constructor mode using the new keyword still works!

// constructor function without new keyword

var bicycle1 = createBicycle(50, 20, 4);

function createBicycle(cadence, speed, gear) {
     // var this = {};
    var newBicycle = {};
    newBicycle.cadence = cadence;
    newBicycle.speed = speed;
    newBicycle.gear = gear;

    return newBicycle;
    // return this;
}

function Bicycle(cadence, speed, gear) {
    // JS interpreter doesn't execute this as a regular function and it doesn't add those two lines
    // here this happens to be a global object
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;

   
}

var bicycle3 = Bicycle(50, 20, 4);
console.log(bicycle3);

// when you execute a function that doesn't have an explicit return in js and you get hold of the return value 
// and assigned it to a variable what would be that variable contain,it would actually contain undefined is thats the 
// behaviour of javascript functions

// if you dont return anything explicitly the func by default returns the value undefined so in this case 
// bicycle3 is going to contain undefined

// Calling a constructor function without the new keyword doesn't work! No New object gets created,and then return value is undefined