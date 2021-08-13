// 2) Add new property to the class

// class Employee {
//     constructor(eid, ename) {
//         this.eid = eid;
//         this.ename = ename;
//     }
// }

// // If we want to add new properties at later stage to a function/class, wecan take the help of prototype
// Employee.prototype.esal = 50000;

// emp1obj = new Employee(100, "Ravindra");
// console.log(emp1obj.eid, emp1obj.ename, emp1obj.esal);

// emp2obj = new Employee(101, "Phanindra");
// console.log(emp2obj.eid, emp2obj.ename, emp2obj.esal)





// Not only variables we can also add functions and methods to prototype

class Employee {
    constructor(eid, ename) {
        this.eid = eid;
        this.ename = ename;
    }
}

Employee.prototype.esal = 50000;

Employee.prototype.display = function() {
    console.log(this.eid, this.ename, this.esal);
}

emp1obj = new Employee(100, "Ravindra");
emp1obj.display();

emp2obj = new Employee(101, "Phanindra");
emp2obj.display();