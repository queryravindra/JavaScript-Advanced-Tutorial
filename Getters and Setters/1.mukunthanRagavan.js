class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    get fullName() {
        return this.first + " " + this.last;
    }

    set fullName(fullName) {
        [this.first, this.last] = fullName.split(" ");
    }
}

let p1 = new Person('Jack', 'Sparrow');

console.log(p1.fullName);   // not p1.fullName()

p1.fullName = "Mark Antony";

console.log(p1);