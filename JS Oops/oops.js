// 4 ways of defining Javascript objects

// 1.JavScript keyword new

/* // typeof Book;  => "object"
let Book = new Object();

// properties
Book.title = "The Healing Power of Breath";
Book.price = 15.99;
Book.author = "Richard P. Brown";

// methods
Book.getInfo = function() {
    return this.title + " - " + "$" + this.price + " US dollars " + "written by " + this.author;
}*/


// 2.Object literals

// let Book = {};  // typeof Book; => "object"

/*
let Book = {
    // properties in key:value pairs
    title: "The Healing Power of Breath",
    author: ["Richard P. Brown", "Patricia L. Berbarg"],
    price: 15.99,
    description: "Breathing techniques to improve health and mental well-being.",
    // multi-word property names
    "publication date": "August 15, 2017",

    // method
    getInfo: function() {
        return this.title + " - " + "$" + this.price + " US dollars " + "written by " + this.author;
    },  // trailing or hanging comma
};
*/


// 3.Using a Function

function Book(title) {  // constructor function (we BUILD object's properties and methods)
    //properties:
    this.title = title;
    this.author = ["Azra Bertrand", "Seren Bertrand"];
    this.description = "Rediscover the lost ancient mystery teachings of the Cosmic Womb";
    this.price = 21.50;

    // method: (external function)
    // this.getInfo = getBookInfo;

    // internal function:
    /* this.getInfo = function() {  // recreated everytime you instantiate this object
        return this.title + " - " + "$" + this.price + " US dollars " + "written by " + this.author;
    }; */
}

// using a function ouside of the Book object:
/* function getBookInfo() {
    return this.title + " - " + "$" + this.price + " US dollars " + "written by " + this.author;
}*/

// prototype function (creates only for Book object but not Book1 and Book3 object but you can access with Book1 and Book3)
// this property present in only Book but not Book1 and Book3
Book.prototype.getInfo = function() {
    return this.title + " - " + "$" + this.price + " US dollars " + "written by " + this.author;
}

let Book1 = new Book("The Humming Effect");
let Book3 = new Book("The Humming Effect", 15.99, "Richard P. Brown", "Breathing Techniques");

// delete Book1;

// 4.Singleton
let Book = new function () { //new instantiates the object
    this.title = "Womb Awekening";
    this.author = ["Azra Bertrand", "Seren Bertrand"];
    this.description = "Rediscover the lost ancient mystery teachings of the Cosmic Womb";
    this.price = 21.50;
    this.getInfo = function() {
        return this.title + " - " + "$" + this.price + " US dollars " + "written by " + this.author;
    }
}

let myBook = new Book();  //TypeError: Book is not a constructor
Book(); // it will work

// we use the constructor to instantiate the object (this kind of constructor in 3.Using a function)
// and it will not work in this case(4.singleton) becz we specifying the instance of object using keyword new here
// (here the object is alreday instantiated)
// so there is no need to instantiate it again