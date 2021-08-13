// every time I run the script a new copy of a gets created

var a = 10;

function outer() {
    var b = 20;

    var inner = function() {
        a++;
        b++;
        console.log(a); 
        console.log(b); 
    }
    return inner;
}

var innerFn = outer();  

innerFn();  

var innerFn2 = outer();  // creates another b

innerFn2();

// The thing to remember is whatever variables we have in functions are actually created for each function execution