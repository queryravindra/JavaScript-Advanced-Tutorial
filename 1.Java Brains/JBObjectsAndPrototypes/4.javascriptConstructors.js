function createEmployeeObject(firstName, lastName, gender, designation) {
    var newObject = {};
    newObject.firstName = firstName;
    newObject.lastName = lastName;
    newObject.gender = gender;
    newObject.designation = designation;

    return newObject;
}

var emp3 = createEmployeeObject('Sathwik', 'Reddy', 'Male', 'Sales Representative');

// this way of creating objects using functions in fairly common in js so the language provides a 
// shortcut to let you write functions that create objects this is a feature in js these functions are called constructor functions

// constructors are basically functions which let you populate the object that you need to create every time

// In all these different functions what are the common lines of code that you can be assure exis in all those 
// different functions that create objects

//If you see that in the above function the first and last line (creating and returning) are more or less common.
// when you are writting a function that creates an object the first line would be creating an empty object 
// and tha last line would be returning the object that you creates so, between these two lines there is 
// bunch of lines that you would have to write to populate that object according to what you are 
// trying to do(if it is department object then department details)

// Js has created a shortcut which lets you not have to write these lines when you are creating 
// functions that create objects.these two lines can be easily skipped

// when you are writting a function that needs to create object these two lines are mandatory you have to write them

// the feature which skips those lines is calling the function in constructor mode
// you need basically tell to JS,hey that it is not an ordinary function,
// this is a function i am using to cretae objects(so i need to say this is a constructor function) 

// the way to tell js is that the function that you are calling is of constructor function is by adding a new keyword infront of it

function createEmployeeObject(firstName, lastName, gender, designation) {
    // var newObject = {};
    newObject.firstName = firstName;
    newObject.lastName = lastName;
    newObject.gender = gender;
    newObject.designation = designation;
    // return newObject;
}

function createEmployeeObject(firstName, lastName, gender, designation) {
    // var this = {};
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.designation = designation;
    // return this;
}

var emp3 = new createEmployeeObject('Sathwik', 'Reddy', 'Male', 'Sales Representative');

// In traditional languages the word that folows the new keyword is name of class but that's not true 
// incase of JS becz js doesn't have classes.what follows new keyword is a function plane in sinple thats all we have in js.

// the thing that new keyword does is it basically switches to a construction mode and this enables js to do a shortcut

// what interpreter does is it makes the new object that it created over here available to you using a variable (a keyword) is called this
// dont access using newObject becz js doesn't know what newObject is it actually created this object using this
 