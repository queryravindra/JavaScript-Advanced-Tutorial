// In javascript there is no concept of public and private methods,you can create functions as properties of objects and then those functions are accessible just like any other property
// A property on an object is available any where outside the object.you can access it just by using reference

// var person = {
//     "firstName": "Ravindra",
//     "lastName": "Reddy",
//     "getFirstName": function() {
//         return this.firstName;
//     },
//     "getLastName": function() {
//         return this.lastName;
//     }
// };

// person.getFirstName()  // Ravindra
// person.firstName  //  Ravindra


// modules which helps us to create private data and public APIs
// JS does not have concept of hiding variables from public access,there is no concept of private variables the idea is to use scopes as a way to hype things

// The concept is what inside the scope is not acceptable outside

// we are going to prevent the access of firstname and lastname any where else by enclosing this in the scope

// first thing is create a function becz the only way i can wrap things in a scope is by creating a function in javascript

// function createPerson() {
//     var returnObj = {
//         "firstName": "Ravindra",
//         "lastName": "Reddy",
//         "getFirstName": function() {
//             return this.firstName;
//         },
//         "getLastName": function() {
//             return this.lastName;
//         }
//     };

//     return returnObj;
// }

// var person = createPerson();

// person.getFirstName // Ravindra
// person.firstName  // Ravindra

// console.log(person.firstName) // Ravindra

// It should not print the value but still it prints the value. this shouldn't work,the reason it prints the value becz that is a property on the object that is being returned and there is no way to prevent property from being accessable outside

// so what i want to do is i want to leverage the scope that is created over her.so the first thing i want to do is clear these two properties out becz as long as these properties are in object these are accessed

// function createPerson() {
//     var firstName = 'Ravindra';
//     var lastName = 'Reddy';

//     var returnObj = {
//         "getFirstName": function() {
//             return firstName;
//         },
//         "getLastName": function() {
//             return lastName;
//         }
//     };

//     return returnObj;
// }

// var person = createPerson();

// console.log(person.firstName) 
// console.log(person.getFirstName()) 


// the object itself doesn't remember these variables, The returnObj doesn't know what is firstName and lastName but getFirstName and getLastName magically seems to know what these variables are thanks to closures


function createPerson() {
    var firstName = 'Ravindra';
    var lastName = 'Reddy';

    var returnObj = {
        "getFirstName": function() {
            return firstName;
        },
        "getLastName": function() {
            return lastName;
        },
        "setFirstName": function(name) {
            firstName = name;
        },
        "setLastName": function(name) {
            lastName = name;
        }
    };

    return returnObj;
}

var person = createPerson();

console.log(person.getFirstName()) 

person.setFirstName('Phanindra');

console.log(person.getFirstName()) 

// the above four properties are working on closure variables but not working on object properties 
// and since those closure variables were available in the scope during the time thhese functions are created they remember it
// the above two variables (firstName and lastName) are created becz of the execution of this createPerson() function,
// you do create a createPerson() again second time its gonna create a new copy of firstName and lastName 
// and that return object that gets created which is again a new copy whenever create person executes 
// thats gonna point to that copy of firstName and lastName created when the createPerson() was executed

// Any variables declared in a function get created every time the function is called