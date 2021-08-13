// In prog lang like Java,c++ without declaring you cannot use variables i.e., you will get a compilation error,but in javascript it depends on what U doing with the variable

var foo;
console.log(foo); // undefined

//2. not defined anything

console.log(foo); //syntax error

// finally declarations are required in JS

//3.not declaring foo just asigning a value
foo = 10;
console.log(foo)


// If we use a variable without declaring it,its ok to do write operation but its not ok to do read operation 
// if we do a write operation on variable without declaring it works fine, but if you do a read operation without declaring it gives you an error

//4.where is the variable created
foo = 10; //In the global scope


//5.
// If u declare variables you can do read and write variables but if u wont declare variables you can do only write operations