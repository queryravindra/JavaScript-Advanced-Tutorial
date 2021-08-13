// function student() {
//     this.name = "Ravindra";
//     this.gender = "male";
// }

// stu1 = new student();   // stu1 is object reference variable for student() fucntion
// stu1.age = 22;    // added a new variable through the object reference variable (belongs to stu1)

// console.log(stu1.name, stu1.gender, stu1.age);

// stu2 = new student();    // Ravindra male 22
// console.log(stu2.name, stu2.gender, stu2.age);    // Ravindra male undefined




// 1) Add new property to the function

// but I want to craete a variable which should belongs to all objects which ever created for this function, so how it is possible?
// this is possible by using 'prototype'

function student() {
    this.name = "Ravindra";
    this.gender = "male";
}

// If we want to add new properties at later stage to a function/class, wecan take the help of prototype
student.prototype.age = 22;    // which will now assosciate with the function now

stu1 = new student();  
console.log(stu1.name, stu1.gender, stu1.age);

stu2 = new student();    
console.log(stu2.name, stu2.gender, stu2.age);   



