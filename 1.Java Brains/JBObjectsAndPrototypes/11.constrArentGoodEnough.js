// Prototypes is a concept in javascript which let you build objects using a template or a blue print

// Its not exactly equivalent to classes becz you dont create instances of a prototype,however you can create 
// behaviours that effect multiple objects by using prototypes


// JavaScript objects don't "own" methods.They just have properties, and any property could be a function

function Bicycle(cadence, speed, gear, tirePressure) {
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    this.inflateTires = function() {
        this.tirePressure += 3;
    }
}

var bicycle1 = new Bicycle(50, 20, 4, 25);