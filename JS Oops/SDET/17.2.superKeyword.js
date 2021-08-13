// super is basically a keyword which is always representing the parent class
// To refer the parent class we are always use super keyword

class Animal {
    constructor(color) {
        this.color = color;
    }

    printColor() {
        console.log(this.color);
    }
}

class Dog extends Animal {
    constructor(color, food) {
        // super() method is used to call parent class constructor
        super(color);   // invoking parent class constructor
        // color i am sending to parent class constructor, initiated the color
        this.food = food;
    }

    eating() {
        console.log("Eating: ", this.food);
    }

    display() {
        this.printColor();
        this.eating();
    }
}

d = new Dog("Black", "Bread");
d.display();

// super keyword to invoke the parent class constructor,which we can use it along with inheritance concept

// the main purpose/usage of inheritance is reusability and we can avoid the redundancy