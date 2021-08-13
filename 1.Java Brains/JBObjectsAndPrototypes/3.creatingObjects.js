var emp1 = {};
emp1.firstName = 'Ravindra';
emp1.lastName = 'Reddy';
emp1.gender = 'M';
emp1.designation = 'Regional Manager';

var emp2 = {};
emp2.firstName = 'Phanindra';
emp2.lastName = 'Reddy';
emp2.gender = 'M';
emp2.designation = 'Financial Advisor';

// when you have more members then it is a problem that we want to write code multiple times but js has one 
// prperty that write one time and use it in multiple places whenever you want

function createEmployeeObject() {
    var newObject = {};
    newObject.firstName = 'Ravindra';
    newObject.lastName = 'Reddy';
    newObject.gender = 'M';
    newObject.designation = 'Regional Manager';

    return newObject;
}

// I want to make this dynamic so, I want to accept these as arguments
function createEmployeeObject(firstName, lastName, gender, designation) {
    var newObject = {};
    newObject.firstName = firstName;
    newObject.lastName = lastName;
    newObject.gender = gender;
    newObject.designation = designation;

    return newObject;
}

var emp3 = createEmployeeObject('Sathwik', 'Reddy', 'Male', 'Sales Representative');


