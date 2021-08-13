// 1)
function init() {
    var firstName = "Ravindra";
    function sayFirstName() {
        console.log(firstName);
    }

    sayFirstName();
}

init();

function doAddition(x) {
    return function (y) {
        return x + y;
    };
}

var add5 = doAddition(4);
console.log(add5(5));

console.log(doAddition(5)(5));