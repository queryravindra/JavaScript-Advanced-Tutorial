// {} -> using this we can create scope in all languages but in javascript its not the way to create scopes

// In javascript scoping is based on functions i.e.,javascript is supposed to have function scoping not block scoping

var name="Ravindra";

if(name === 'Ravindra') {
    var department = 'IT';
}

// output is as expected becz javascript is not block scoped i.e., doesn't create scopes for block
console.log(name);  // Ravindra
console.log(department)    // IT

// Only way to create scopes in javascript are by creating functions
// there are other parts to creating scopes in Js but for the most part is by creating functions

var name = 'Ravindra'

function allocateDepartment(){
    if(name === 'Ravindra') {
        var department = 'IT';
    }
}

allocateDepartment();

// runtime Error
console.log(department);