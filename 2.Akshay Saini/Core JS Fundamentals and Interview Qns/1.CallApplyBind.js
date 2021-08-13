let name1 = {
    firstName: "Ravindra",
    lastName: "Reddy",
    printFullName: function() {
        console.log(this.firstName + " " + this.lastName);   // Ravindra Reddy
    }
}

name1.printFullName();

let name2 = {
    firstName: "Phanindra",
    lastName: "Reddy",
    // printFullName: function() {
    //     console.log(this.firstName + " " + this.lastName);   // undefined Reddy
    // }
}


// function borrowing

name1.printFullName.call(name2);
// Ravindra Reddy
// Phanindra Reddy


/****************************************************************************************/


let name1 = {
    firstName: "Ravindra",
    lastName: "Reddy",
}

let printFullName = function() {
    console.log(this.firstName + " " + this.lastName);
}

printFullName.call(name1);  // Ravindra Reddy

let name2 = {
    firstName: "Phanindra",
    lastName: "Reddy",
}


// function borrowing

printFullName.call(name2);   // Phanindra Reddy


/****************************************************************************************/


let name1 = {
    firstName: "Ravindra",
    lastName: "Reddy",
}

let printFullName = function(hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + " , " + state);
}

printFullName.call(name1, "Warangal", "Telangana");  // Ravindra Reddy from Warangal , Telangana
// first parameter will always be the reference to the this variable and the
// later arguments can be the arguments to this function

let name2 = {
    firstName: "Phanindra",
    lastName: "Reddy",
}


// function borrowing

printFullName.call(name2, "Vizag", "Andhra Pradesh");   // Phanindra Reddy from Hanamkonda , Andhra Pradesh

// apply method

// The only difference between Call and Apply is the way we passing Arguments
// we pass the arguments in apply method is ArrayList instead of passing individually comma separated in Call method

printFullName.apply(name2, ["Vizag", "Andhra Pradesh"]);   // Phanindra Reddy from Hanamkonda , Andhra Pradesh


// bind method

// looks exactly same as call method but the only difference is instead of directly calling the method over there the bind method
// binds the method printFullName() with the object and returns as that copy of that method

let printMyName = printFullName.bind(name2, "Vizag", "Andhra Pradesh");
console.log(printMyName);
// ƒ (hometown, state) {
//     console.log(this.firstName + " " + this.lastName + " from " + hometown + " , " + state);
// }
printMyName();   // Phanindra Reddy from Hanamkonda , Andhra Pradesh


// The only difference between call() and bind() is like it gives you the copy but which can be invoked later rether
// then directly invoking it where ever we are writting this line of code