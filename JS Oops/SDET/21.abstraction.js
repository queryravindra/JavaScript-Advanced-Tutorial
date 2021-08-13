// function Employee(name, age, basicsal) {
//     this.name = name;
//     this.age = age;
//     this.basicsal = basicsal;
//     this.bonus = 3000;   // bonus should not be exposed

//     this.calfinalsal = function() {      // calfinalsal should not be exposed
//         finalsal = this.basicsal + this.bonus;
//         console.log("Final Salary:", finalsal);
//     }

//     this.displayinfo = function() {
//         console.log("Name: " + this.name + " " + "Age:" + this.age); 
//     }
// }

// emp1 = new Employee("Jack", 25, 5000);
// emp1.displayinfo();
// emp1.calfinalsal();
// console.log(emp1.bonus);

// emp1.bonus = 5000;
// console.log(emp1.bonus);





function Employee(name, age, basicsal) {
    this.name = name;
    this.age = age;
    this.basicsal = basicsal;
    let bonus = 3000;   

    let calfinalsal = function() {
        finalsal = basicsal + bonus;   // remove this(search in google why?)
        console.log("Final Salary:", finalsal);
    }

    this.displayinfo = function() {
        console.log("Name: " + this.name + " " + "Age:" + this.age);
        calfinalsal(); 
    }
}

emp1 = new Employee("Jack", 25, 5000);
emp1.displayinfo();
// emp1.calfinalsal();   // how to get calfinalsal(),to do this include method in displayinfo()