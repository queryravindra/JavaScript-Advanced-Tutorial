// 1.

console.log(a);   // undefined
var a = 7;

console.log(a);   // 7

// undefined is a special keyword ,it takes it own memoryand it is not equal to empty

// 2.

var a;

console.log(a); // undefined throught the program



// 3.

// Javascript is loosely type language i.e., it doesn't attaches its variables to any specific datatype (and it also known as weekly type language)

var a;
console.log(a);
a = 10;
console.log(a);
a = "hello world";
console.log(a);


// 4.never do this mistake
a = undefined;
console.log(a)

// undefined is like a placeholder which is kept inside the variables and it can lead to a lot of inconsistencies but it is a good practice to do this