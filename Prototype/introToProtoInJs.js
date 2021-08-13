/*********************************************
// [ toString, valueOf, isPrototypeOf, hasOwnProperty...]
// obj ==> obj.prototype (Object prototype)  ==> null
Object Prototypes in JavaScript
 * ************************************************/

let obj1 = {
    prop1: () => console.log('prop1')
};

// obj.prop1();  // prop1
// obj.toString();   // am not getting an error
// the reason am not getting error is this is how some magically `toString()` been attached to my object
// thats becz every object that you create in javascript has a prototype object

let obj2 = {
    prop2: () => console.log('prop2')
};

Object.setPrototypeOf(obj2, obj1);
obj2.prop2();
obj2.prop1();
obj2.toString();   // no error

Object.getPrototypeOf(obj2).prop1();   // prop1

console.log(Object.getOwnPropertyNames(obj2)); ["prop2"]

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(obj1)));   // 12 properties in Array