function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    y();
}
x();

// this is what closure is

// 2.

function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z);

// output:
// ƒ y() {
//     console.log(a);
// }

z();
// what it will print ,there is no 'a' globally right and taht x has vanished but it prints 7
// 7

// so here comes closure into picture

// when function returns from function it still maintains its lexical scope

// thre is no x but the function remembers its lexical scope from whree it comes
// when we return function it not only returns code but it returns its closure(closure enclosed function with its lexical scope that was returned) and it was put inside z
// and when you ececutes z somewhere else in program it still remembers a (still remembers reference to a and it tries to find out a which is 7)

// 3.
function x() {
    var a = 7;
    return function y() {
        console.log(a);
    }
}
var z = x();
console.log(z);

z();

// 4.
function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    a = 100;
    return y;  // reference to the a's memory location not the value
}
var z = x();
console.log(z);

z();

// 5.

function z() {
    var b = 900;
    function x() {
        var a = 7;
        function y() {
            console.log(a, b);
        }
        y();
    }
    x();
}
z();

// will it still be a closure?