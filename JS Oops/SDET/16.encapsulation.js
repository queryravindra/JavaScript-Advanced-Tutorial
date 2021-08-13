class Student {
    constructor() {
        let name, marks;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getMarks() {
        return this.marks;
    }

    setMarks(marks) {
        this.marks = marks;
    }
}

let stu = new Student();

stu.setName("Ravindra");
stu.setMarks(90);

// console.log(stu.gettName());    // Uncaught TypeError: stu.gettName is not a function (error here not displaying remaining results)
// for TypeError we are not getting any remaining results
// once this error will get in code nothing it will show
// but do search for what type of errors the results will not show
// for what type of errors will occur also the results will show
console.log(stu.getName());
console.log(stu.getMarks());

console.log(stu.getName(), stu.getMarks());

// observe here we are not initialising the values of data, we are managing through methods