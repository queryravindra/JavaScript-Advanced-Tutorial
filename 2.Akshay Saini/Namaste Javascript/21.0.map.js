const arr = [5, 1, 3, 2, 6];

// Double - [10, 2, 6, 4, 12]

// Triple - [15, 3, 9, 6, 18]

// Binary - ["101", "1", "11", "10", "110"]

// function double(x) {
//     return x * 2;
// }

// function triple(x) {
//     return x * 3;
// }

// function binary(x) {
//     return x.toString(2);
// }

// const output = arr.map(double);
// const output1 = arr.map(triple);
// const output2 = arr.map(binary);

// console.log(output);
// console.log(output1);
// console.log(output2);


// ---------------------------------------------------------------------------------------------------

// even the below one is a perfectly valid syntax in javascript (you can pass in functions like these)

// const output = arr.map(function binary(x) {
//     return x.toString(2);
// }) 

// console.log(output);

// ----------------------------------------------------------------------------------------------------

// const output = arr.map(x => x.toString(2));

// console.log(output);




// ------------------------------------------------------------------------------------------------------

// Real World Examples

const users = [
    { firstName: "Ravindra", lastName: "Reddy", age: 26 },
    { firstName: "Ratan", lastName: "Tata", age: 82 },
    { firstName: "Sachin", lastName: "Tendulkar", age: 45 },
    { firstName: "Deepika", lastName: "Padukone", age: 26 }
];

// 1.list of full names
// ["Ravindra Reddy", "Ratan Tata".....]

const output = users.map(x => x.firstName + " " + x.lastName);

console.log(output);  // ["Ravindra Reddy", "Ratan Tata", "Sachin Tendulkar", "Deepika Padukone"]

// 2.How many users have a particular age
// { 26 : 2, 82 : 1, 45 : 1 }

const output1 = users.reduce(function(acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }

    return acc;
}, {})

console.log(output1);  // { 26: 2, 45: 1, 82: 1 }

// 3.we need to find out the firstname of all the people whose age is lessthan 30
// ["Ravindra", "Deepika"]

// the power of these functions(HOF) is chaining

const output2 = users.filter(x => x.age < 30).map(x => x.firstName);

console.log(output2);  // ["Ravindra", "Deepika"]

    // you can also use reduce() to come up with the above solution 
            //    HomeWork