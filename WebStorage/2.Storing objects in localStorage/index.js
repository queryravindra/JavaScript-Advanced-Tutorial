let myObj = {
    name: "Ravindra Reddy",
    age: 56
};

localStorage.setItem("myObj", myObj);
console.log(localStorage);  // {myObj: "[object Object]", length: 1}
console.log(localStorage.getItem("myObj"));  // [object Object]

// we need to represent object as a string

// serialization means converting data to another form that is readable


// --------------------------------------------------------------------------------------------------

let myObj = {
    name: "Ravindra Reddy",
    age: 56
};

let myObj_serialized = JSON.stringify(myObj);
console.log(myObj_serialized);  // {"name":"Ravindra Reddy","age":56}

localStorage.setItem("myObj", myObj_serialized);
console.log(localStorage);  // {myObj: "{\"name\":\"Ravindra Reddy\",\"age\":56}", length: 1}

let myOj_deserialized = JSON.parse(localStorage.getItem("myObj"));
console.log(myObj_serialized);  // {"name":"Ravindra Reddy","age":56}
