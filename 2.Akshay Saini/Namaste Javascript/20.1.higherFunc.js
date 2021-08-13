const radius = [3, 1, 2, 4];

const area = function (radius) {
    return Math.PI * radius * radius;
};

const circumference = function (radius) {
    return 2 * Math.PI * radius;
};

const diameter = function (radius) {
    return 2 * radius;
};

// Let us create a generic function
const calculate = function (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
};


// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter)); 


// Here calculate is hiogher order function and area, diameter, circumference are callback functions

// map is a common higher order function
// map functions maps the whole array with some logic and that logic is what we pass

console.log(radius.map(area));

console.log(calculate(radius, area));

// both above statements give same result
// calculate and map both are same
// we wrote our map impletation there with calculate

// Lets try to make calculate function exactly similar to map
// we just need to put this calculate on the Array.prototype
Array.prototype.calculate = function (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
};

// Array.prototype.calculate = function (arr, logic) {
//     const output = [];
//     for (let i = 0; i < arr.length; i++){
//         output.push(logic(arr[i]));
//     }
//     return output;
// };

// Now this function calculate will be available on all the arrays you see in your code
// when we put something on prototype it will appear on all the arrays
// now we can proceed to as

// console.log(arr.calculate(arr, area));
console.log(radius.calculate(radius, area));

Array.prototype.calculate = function (logic) {
    const output = [];
    for (let i = 0; i < this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
};

// lets make more similar to map with only one argument
console.log(radius.calculate(area));
// we removed radius argument for that what we need to do, we need to remove this 'radius'(arr) also from above function
// Now you would be asking that where do we get 'radius'(arr) from (what should replace)...
// so in this case when you do radius.calculate(arr.calculate) over here in the calculate function( radius.calculate(area) ) 
// the 'this' over here points to the array which is 'this' calculate called upon ('this' overhere in above function would be the 'radius')
// so when you write 'radius.calculate' so that means the 'this' in the calculate function which will be pointed to this array(radius)

// this is how you write polyfill for map 