var bicycle = {
    "cadence": 50,
    "speed": 20,
    "gear": 4
}

function createBicycle(cadence, speed, gear) {
    var newBicycle = {};
    newBicycle.cadence = cadence;
    newBicycle.speed = speed;
    newBicycle.gear = gear;

    return newBicycle;
}

var bicycle1 = createBicycle(50, 20, 4);
var bicycle2 = createBicycle(20, 5, 1);

function createBicycle(cadence, speed, gear) {
    var newBicycle = {};
    newBicycle.cadence = cadence;
    newBicycle.speed = speed;
    newBicycle.gear = gear;

    return newBicycle;
}

function Bicycle(cadence, speed, gear) {
    // var this = {};
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;

    // return this;
}

var bicycle3 = new Bicycle(50, 20, 4);

// There is no property on the function itself which indicates that it is a constructor.the constructor 
// mode in JS happens to be a way in which you can call a function

// In other class-based languages,the convention is to name classes with initial-case.In Javascript,constructor functions are named that way
