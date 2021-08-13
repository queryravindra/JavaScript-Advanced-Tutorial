// global variables are very bad becz
// 1.if we are developing a libaray or something else if we declare some global variables and some other teammate contributed some code and if it has 'variables' with same names then it sholud be a problem
// 2.clashing with other 'global variables' that are from other teammates
// becz of all these reasons avoiding global variables be better

// var a = 10;
// var b = 10;
// console.log(a + b);

// preventing from being global is by wrapping up in a function

function myFn() {
    var a = 10;
    var b = 10;
    console.log(a + b);
}

myFn();

// but we have created a global function called myFn(),again here the same issue arises i.e., messing with other global functions with same name being developed by other teammates and the solution for this is

// anonymous function becz it doesnt have any name 
// function () {
//     var a = 10;
//     var b = 10;
//     console.log(a + b);
// }

// but how we will call and get execute the above function
(function () {
    var a = 10;
    var b = 10;
    console.log(a + b);
})();

// the above function is called IIFE -> Immediately Invoked Function Expression
// the inner part function is anonymous function expression and it is immediately invoked, and it doesn't given any name and not allocating to a variable

// benifits of IIFE are
// 1.we cannot access either a or b value from above IIFE i.e.,scope is restricted to block and not polluting the global namespace, 
// 2.not polluting with function too,it doesn't have any name