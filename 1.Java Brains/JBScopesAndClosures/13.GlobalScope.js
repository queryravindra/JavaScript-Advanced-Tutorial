// 1.
 var a = 10;

 function myFn(){
    var b = a;
    console.log(b);
    console.log(c); // First it looks in local scope,if it is not there it goes to global scope and checks wether it was there or not there and the variable not present there also  // It is a read operation and it doesn't know where to read thus throws an error i.e., no declaration only write operation was possible but not read operation.here it is read operation
 }

 myFn()

 // compiler: 'var a' and 'myFn' stores in global scope
 // 'var b' stores in myFn scope

 var a = 10;

 function myFn(){
    var b = a;
    console.log(b);
    c = 100; // if the variable doesn't exist let the developer create one or the developer needs to be created.so the interpreter assumes the need for the variable to exist and now it creates it

    // the question is which scope does it created in.it checked all in local scope and global scope and now its looking at the global scope now,the interpreter creates the variable with name 'c' is actually creates in global scope.it doesnt created in the myFn scope even though the line that causes the variable to be created is inside myFn scope
}

myFn()
