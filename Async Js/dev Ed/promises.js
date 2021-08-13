// A promise is just an object that basically gives us back either a result of an async operation or a failure of a async operation


// resolve 

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("got the user");
//         resolve({ user: "ed" });
//     }, 2000);
// });

// promise.then( user => {
//     console.log(user);
// });


// reject

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("got the user");
        reject(new Error("User not logged in"));
    }, 2000);
});

promise.then( user => {
    console.log(user);
// }).catch( err => console.log(err));
}).catch( err => console.log(err.message));