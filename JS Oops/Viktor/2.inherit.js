// class ClassA {
//     constructor() {
//         this.propA = 'A';
//     }

//     methodA() {
//         return this.propA;
//     }
// }

// class ClassB extends ClassA {
//     constructor() {
//         // the super keyword is used as a “function” 
//         // which calls the parent class ClassA with the parameters passed to ClassB
//         super();
//         this.propB = 'B';
//     }

//     methodB() {
//         // super is used as an “object” which refers to an ClassA instance (parent class). 
//         // The super keyword here is used to call the methods of the parent class ClassA explicitly.
//         return this.propB + super.methodA();
//     }
// }

// class ClassC extends ClassB {
//     constructor() {
//         super();
//         this.propC = 'C';
//     }

//     methodC() {
//         return this.propC + super.methodB();
//     }
// }

// const a = new ClassA();
// const b = new ClassB();
// const c = new ClassC();

// console.log(a, b, c);



// class ClassA {
//     constructor() {
//         this.propA = 'A';
//     }

//     methodA() {
//         console.log('methodA:', this);
//         return this.propA;
//     }
// }

// class ClassB extends ClassA {
//     constructor() {
//         // the super keyword is used as a “function” 
//         // which calls the parent class ClassA with the parameters passed to ClassB
//         super();
//         this.propB = 'B';
//     }

//     methodB() {
//         // super is used as an “object” which refers to an ClassA instance (parent class). 
//         // The super keyword here is used to call the methods of the parent class ClassA explicitly.
//         return this.propB + super.methodA();
//     }
// }

// class ClassC extends ClassB {
//     constructor() {
//         super();
//         this.propC = 'C';
//     }

//     methodC() {
//         return this.propC + super.methodB();
//     }
// }

// const a = new ClassA();
// const b = new ClassB();
// const c = new ClassC();

// console.log(a, b, c);

// console.log(c.methodA());
// console.log(c.methodC());




// class ClassA {
//     constructor() {
//         this.propA = 'A';
//     }

//     methodA() {
//         console.log('methodA:', this);
//         return this.propA;
//     }
// }

// class ClassB extends ClassA {
//     constructor() {
//         // the super keyword is used as a “function” 
//         // which calls the parent class ClassA with the parameters passed to ClassB
//         super();
//         this.propB = 'B';
//     }

//     methodA() {
//         return 'NEW B';
//     }

//     methodB() {
//         // super is used as an “object” which refers to an ClassA instance (parent class). 
//         // The super keyword here is used to call the methods of the parent class ClassA explicitly.
//         return this.propB + super.methodA();
//     }
// }

// class ClassC extends ClassB {
//     constructor() {
//         super();
//         this.propC = 'C';
//     }

//     methodC() {
//         return this.propC + super.methodB();
//     }
// }

// const a = new ClassA();
// const b = new ClassB();
// const c = new ClassC();

// console.log(a, b, c);

// console.log(c.methodA());
// console.log(c.methodC());



// class ClassA {
//     constructor() {
//         this.propA = 'A';
//     }

//     methodA() {
//         console.log('methodA:', this);
//         return this.propA;
//     }
// }

// class ClassB extends ClassA {
//     constructor() {
//         // the super keyword is used as a “function” 
//         // which calls the parent class ClassA with the parameters passed to ClassB
//         super();
//         this.propB = 'B';
//     }

//     methodA() {
//         return 'NEW B';
//     }

//     methodB() {
//         // super is used as an “object” which refers to an ClassA instance (parent class). 
//         // The super keyword here is used to call the methods of the parent class ClassA explicitly.
//         return this.propB + this.methodA();
//     }
// }

// class ClassC extends ClassB {
//     constructor() {
//         super();
//         this.propC = 'C';
//     }

//     methodC() {
//         return this.propC + super.methodB();
//     }
// }

// const a = new ClassA();
// const b = new ClassB();
// const c = new ClassC();

// console.log(a, b, c);

// console.log(c.methodA());
// console.log(c.methodC());



// class ClassA {
//     constructor() {
//         this.propA = 'A';
//     }

//     methodA() {
//         console.log('methodA:', this);
//         return this.propA;
//     }
// }

// class ClassB extends ClassA {
//     constructor() {
//         // the super keyword is used as a “function” 
//         // which calls the parent class ClassA with the parameters passed to ClassB
//         super();
//         this.propB = 'B';
//     }

//     methodA() {
//         return 'NEW B';
//     }

//     methodB() {
//         // super is used as an “object” which refers to an ClassA instance (parent class). 
//         // The super keyword here is used to call the methods of the parent class ClassA explicitly.
//         return this.propB + this.methodA();
//     }
// }

// class ClassC extends ClassB {
//     constructor() {
//         super();
//         this.propC = 'C';
//         this.testProp = 1;  // if it is being commented then c.testprop takes value of ClassB.prototype.testprop = "Bproto"
//         // this behaviour is called property shadowing
//    }

//     methodC() {
//         return this.propC + super.methodB();
//     }
// }

// const a = new ClassA();
// const b = new ClassB();
// const c = new ClassC();

// ClassB.prototype.testProp = 'Bproto';

// console.log(a, b, c);

// console.log(c.testProp);

// console.log(c.methodA());
// console.log(c.methodC());




class ClassA {
    constructor() {
        this.propA = 'A';
    }

    methodA() {
        return this.propA;
    }
}

class ClassB extends ClassA {
    constructor() {
        super();
        this.propB = 'B';
    }

    methodB() {
        return this.propB + this.methodA();
    }
}

class ClassC extends ClassB {
    constructor() {
        super();
        this.propC = 'C';  
   }

    methodC() {
        return this.propC + super.methodB();
    }
}

const a = new ClassA();
const b = new ClassB();
const c = new ClassC();

console.log(Object.getPrototypeOf(c) === ClassC.prototype);   // true

console.log(Object.getPrototypeOf(Object.getPrototypeOf(c)) === ClassB.prototype);   // true

console.log(Object.getPrototypeOf(Object.getPrototypeOf(c)) === ClassA.prototype);   // false

console.log(Object.getPrototypeOf(Object.getPrototypeOf(b)) === ClassA.prototype);   // true

console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(b))) === Object.prototype);   // true

console.log(c instanceof ClassC);   // true

console.log(c instanceof ClassA);   // true