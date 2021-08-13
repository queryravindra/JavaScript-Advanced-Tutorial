// 1.

function a() {
    console.log(b);
}

var b = 10;
a();


// 2.

function a() {
    c();
    function c() {
        console.log(b);
    }
}

var b = 10;
a();
