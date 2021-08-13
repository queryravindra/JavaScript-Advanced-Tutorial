// whenever you create anything in javascript even a variable they get access to some of the hidden properties and methods
// so these come via prototypes


// whenever you create an object, javascript engine automatically puts these hidden properties into an object and attaches to your object


let object = {
    name: "Ravindra",
    city: "Hanamkonda",
    getIntro: function() {
        console.log(this.name + " from " + this.city);
    }
}

let object2 = {
    name: "Phanindra"
}

// Never do this
// It causes huge performance issue
object2.__proto__