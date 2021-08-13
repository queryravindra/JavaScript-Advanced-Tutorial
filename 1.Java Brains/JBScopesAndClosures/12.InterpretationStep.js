// Execution step doesn't look for 'var's',it look for what it needs to do
// suppose (var name="ravindra") the compilation step looks for 'var' but the execution step looks for (name="ravindra")

// compilation step is like an accounting or book keeping step where the compiler can makes record of all the variables,set of being used and where they are used and all that information are ready for execution step

var myName = 'Ravindra';

function greet(name){
    console.log("Hello, " + name);
}

greet(myName);