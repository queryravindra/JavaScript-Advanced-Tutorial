class Test {
    static a = 10;    // static variable
    b = 20;    // Non-static variable

    static m1() {
        // here doesnt require this.a i think once check simply 'a' can work
        console.log("This is m1 static method...");
    }

    m2() {
        console.log("This is m2 Non-static method...")
    }
}

// 1) we can directly access static variables and methods using class name

console.log(Test.a);    // 10
Test.a = 1000;
console.log(Test.a);
// console.log(Test.b);    // undefined

Test.m1();    // This is m1 static method...
// Test.m2();    // Uncaught TypeError: Test.m2 is not a function (we got typeerror execution stopped here not displayed below ones)

// 2) we can access non static variables and methods using object

let t = new Test();

console.log(t.b);
t.m2();