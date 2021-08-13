// method overriding basically do is whatever previous implementation is done in parent class we will modify that implementation
// or we will recreate that method
// i.e., we should not change the definition(name, no.of arguments and type of the arguments) of that method
// only the body of the method we can change so that is called overriding concept

class Bank {
    roi() {
        return 0;
    }
}

class AXIS extends Bank {
    roi() {
        return 10.5;
    }
}

class SBI extends Bank {
    roi() {
        return 12.5;
    }
}

sbi = new SBI();
console.log(sbi.roi());    // 12.5

ax = new AXIS();    // depends on object we are created for class it will return the method(which will call corresponding method)
console.log(ax.roi());    // 10.5

// method overriding is only posssible with inheritance concept