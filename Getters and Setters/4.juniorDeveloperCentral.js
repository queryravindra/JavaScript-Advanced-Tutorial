// class User {
//     set name(value) {
//         // Maximum call stack size exceeded (function calls itself again anad again) becz we've created infinite loop
//         // this is becz assigning a value to this.name will actually call set name() again so we need to use diiff prop name 
//         // when storing the value that we passed in the setter

//         // this.name = value;   
//         this._name = value;   
//     }
// }

// const newUser = new User();

// newUser.name = 'Ravindra';
// console.log(newUser._name);  // Ravindra


/**************************************************************************************************************/


// class User {
//     set name(value) {  
//         this._name = value;   
//     }

//     get name() {
//         return this._name;
//     }
// }

// const newUser = new User();

// newUser.name = 'Ravindra';
// console.log(newUser.name);  // Ravindra


/**************************************************************************************************************/


// class User {
//     set name(value) {  
//         if(value.length < 1) {
//             throw new Error('Please provide a name for the user');
//         }  
//         this._name = value; 
//     }

//     get name() {
//         return this._name;
//     }

//     set password(value) {
//         if(value.length < 6) {
//             throw new Error('Password must be atleast 6 charecters');
//         }
//         this._password = value;
//     }

//     get password() {
//         return '*'.repeat(this._password.length);
//     }
// }

// const newUser = new User();

// newUser.name = 'Ravindra';
// newUser.password = 'password';
// console.log(newUser.name);   // Ravindra
// console.log(newUser.password);   // ********
// console.log(newUser._password);   // password


/**************************************************************************************************************/

function User() {}

Object.defineProperty(User.prototype, 'name', {
    set: (value) => {
        if(value.length < 1) {
            throw new Error('Please provide a username');
        }
        this._name = value;
    },

    get: () => this._name
});

const newUser = new User();

newUser.name = 'Phanindra';
console.log(newUser.name);


// even there are two approaches most of the will use Es6 syntax