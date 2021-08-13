class Shape {
    draw() {
        return "I am a generic shape";
    }
}

class Square extends Shape {
    // same method as parent class but implementation is different i.e, body is different
    draw() {
        return "I am Square";
    }
}

class Circle extends Shape {
    draw() {
        return "I am Circle";
    }
}

// same method is having three different forms
// Now when i create an object for Circle class through that object I can access draw() method which is from Circle class
// llry when i create an object for Square class I can access draw() method which is from Square class
// and when i create an object for Shape class I can access draw() method which is from Shape class

// s = new Shape();  // it will too work correctly
let s = new Shape();
console.log(s.draw());

s = new Square();
console.log(s.draw());

s = new Circle();
console.log(s.draw());


// this is also called as method overriding
// we can achieve this polymorphism through this feature



/******************************************************************************/

class Shape {
    draw() {
        console.log("I am a generic shape");
    }
}

class Square extends Shape {
    draw() {
        console.log("I am Square");
    }
}

class Circle extends Shape {
    draw() {
        super.draw();
        console.log("I am Circle");
    }
}

s = new Circle();
s.draw();  


// output:

// I am a generic shape
// I am Circle