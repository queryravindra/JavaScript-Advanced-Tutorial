// Not this once check belongs to what

class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
        Person.count++;
    }

    static walk() {
        console.log('Walk');
    }

    speak() {
        console.log("Speak");
    }

    // setter
    set eats(_food){
        this.food = _food;
    }

    // getter
    get dinner(){
        console.log(`${this.name} eats ${this.food}`);
    }

    static get COUNT() {
        console.log(Person.count);
    }
}

Person.count = 0;
const per1 = new Person('Avi', 9);
Person.COUNT;
const per2 = new Person('Tanu', 5);