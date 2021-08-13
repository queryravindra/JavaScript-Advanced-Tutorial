//1
// Write operation
var a = 10;

// Read Operation
console.log(a);

//2
var a = 10;
var b;

// Reading from a and writting to b;
// L.H.S -> write oprn
// R.H.S -> read oprn
b = a;

//3
// No L.H.S and R.H.S in this case
// line 17 is write operation on variable name
function greet(name) {
    // line 19 is read operation on variable name
    console.log(name);
}

greet('Ravindra');