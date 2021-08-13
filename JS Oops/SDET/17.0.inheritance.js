class A {
    // once check variables in class doesnt require datatypes
    a = 100;    // Uncaught ReferenceError: a is not defined (no remaining result) (to eradicate error use 'this' keyword) 

    display() {
        // console.log(a);
        console.log(this.a);
    }
}

class B extends A {
    b = 200;

    show() {
        // console.log(b); 
        console.log(this.b);
    }
}

bobj = new B();    // (check once no need datatype but also it is printing)

bobj.display();
bobj.show();