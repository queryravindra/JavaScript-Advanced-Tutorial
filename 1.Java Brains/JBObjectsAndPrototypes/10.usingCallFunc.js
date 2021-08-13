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

function Mechanic(name) {
    this.name = name;
}

var mike = new Mechanic("Mike");

mike.inflateTires = bicycle1.inflateTires;  //property
mike.inflateTires();  // undefined (Nan in mike object i.e., tirePressure:Nan)

// mike.inflateTires.call();  == mike.inflateTires();

mike.inflateTires.call(bicycle1);  

// the this reference of the inflateTires() is going to be mike oject from previous discussion




// ---------------------------------------------------------------------


function foo() { this.abc = def; }

foo.call({});  // is exactly same as foo();

// but what is the need of the call() becz it takes an object as property and binds this object to the this reference on the function foo()


// If you happen to have the this reference(this.abc = def;) in functio foo(),now when you pass an 
// object to the call property of the function the JS interpreter does two things,it calls the function like 
// you would have expected too but when it executes the function it binds the this reference on that function 
// to the object that passed as an argument to the call function

// Now,whenever you access this in this function(foo()) this is bound to the object thats passed
// so,you can basically choose what object you want the this reference to point to.this is different from the other 
// three methods that we've talked about where the this ref is based on a rule,its implicit