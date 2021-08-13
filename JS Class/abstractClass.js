// Create a Shape object which is abstract
var Shape = function() {
    this.shapeName = "None";
    throw new Error("Cannot create an instance of abstract class");
}

// Error: cannot create an instance of abstract class
// var shape = new Shape();

// Add a draw function to the Shape function
// Object derived from Shape should be able to call draw() method
Shape.prototype.draw = function() {
    return "Drawing " + this.shapeName;
}

// Create a Circle Object
var Circle = function(shapeName) {
    this.shapeName = shapeName;
}

// Make shape the parent for Circle
// Object.create() allows to create an object without using constructor
Circle.prototype = Object.create(Shape.prototype);

var circle = new Circle("Circle");
// Since Circle inherits from abstract Shape Object, it can all draw() method
document.write(circle.draw());

alert(circle instanceof Circle);   // Returns true
alert(circle instanceof Shape);    // Returns true