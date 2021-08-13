{
    var a = 10;      // Global Scope
    let b = 20;      // Block Scope
    const c = 30;    // Block Scope
}


// let and const are block scoped i.e., They are stored in separete memory space which is reserved for this block

{
    var a = 10;      
    let b = 20;      
    const c = 30;   

    console.log(a);
    console.log(b);
    console.log(c);
}

// console.log(a);
// console.log(b);
// console.log(c);

// 10
// 20
// 30
// 10
// Uncaught ReferenceError: b is not defined


// Shadowing in Javascript

// If you have same named variable outside this block

// 2.

var a = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);

// line no 43 and 47 both are referring to the same memory space i.e., global space
// but this is not the case in let. lets see...

// 3.
var b = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(b);

// 10
// 20
// 30
// 100
