// An object is a collection of multiple values

// 1. An object can be created in multiple ways in javascript the simplest way is to create js object in inline(empty object)

var myObj = {};
console.log(myObj);

// Object in javascript is not class based i.e., no blue print(I can create any property on any object whenever I want)
// There is no datatype restrictions as well

// 2. Inline object with all the values
var myObj = {
    "foo": "Value",
    "age": 30,
    "address": {
        "street": "123 JS",
        "city": "JS",
        "pin": "12345"
    }
};

console.log(myObj.foo);
console.log(myObj['foo']);