// what happens when javascript engine processes a function

// whenever the javascript engine processes the functions it doesn't create just one object 
// it actually creates two objects the first object is the function which is the name whatever you given here ( function foo() ).
// what is the other object? there are two objects created for every function,what is the second object

// the second object that gets created for every function is actually whats called the prototype object

// every time you create a function,there are two objects that are created.one is the object for the function itself and 
// the second is the object for the prototype 

// what is the point of the prototype  ----   next tutorial

// how to access the objects thats get created one is as usual ( foo ),but how to access the prototype object

// turns out what the javascript interpreter does is it creates a property on this function objects that point to the prototype objects.

// I can access that protype by typing ' foo.prototype() '

// prototypes comes into effect you do create objects from functions



function foo() {}  // <-- undefined

foo  // <-- function foo()
// foo   ---->  function object