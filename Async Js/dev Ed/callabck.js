// callsatck is a kind of a way for javascript to keep track of all your Execution context

// difference betweeen callstack and execution context

// callbacks are not always asynchronous( even we can use it in array methods etc..)
// callabcks are not necessary async may synchronous too


// using callbacks

// console.log('Start');

// function loginUser(email, password, callback) {
//     setTimeout(() => {
//         console.log("Now we have the data");
//         callback({ userEmail: email });
//     }, 3000);
// }

// function getUserVideos(email, callback){
//     setTimeout(() => {
//         callback (["video1", "video2", "video3"]);
//     }, 2000);
// };

// function videoDetails(video, callback) {
//     setTimeout(() => {
//         callback ('title of the video');
//     }, 2000);
// }

// const user = loginUser("abc@abc.com", 123456, user => {
//     console.log(user);
//     getUserVideos(user.userEmail, (videos) => {
//         console.log(videos);
//         videoDetails(videos[0], (title) => {
//             console.log(title);
//         })
//     });
// });

// console.log("Finish");




// Using Promises
console.log('Start');

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Now we have the data");
            resolve({ userEmail: email });
        }, 3000);
    });
}

function getUserVideos(email, callback){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["video1", "video2", "video3"]);
        }, 2000);
    })
};

function videoDetails(video, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('title of the video');
        }, 2000);
    })
}

// for end point you shouldnt do these many times

// loginUser("ed", "bumba")
//     .then( user => getUserVideos(user.email))
//     .then( videos => videoDetails(videos[0]))
//     .then( detail => console.log(detail));

// // SYNC
// const user = loginUser("ed", "sdf");
// const videos = videoDetails(user.email);

// console.log("Finish");



// const yt = new Promise( resolve => {
//     setTimeout(() => {
//         console.log("getting stuff from youtube");
//         resolve({ videos: [1, 2, 3, 4, 5] });
//     }, 2000);
// });

// const fb = new Promise( resolve => {
//     setTimeout(() => {
//         console.log("getting stuff from facebook");
//         resolve({ user: "Name" });
//     }, 2000);
// });

// Promise.all([yt, fb]).then(result => console.log(result));


// If one of them take longer the result is not gonna come back until both promise are fulfilled
const yt = new Promise( resolve => {
    setTimeout(() => {
        console.log("getting stuff from youtube");
        resolve({ videos: [1, 2, 3, 4, 5] });
    }, 2000);
});

const fb = new Promise( resolve => {
    setTimeout(() => {
        console.log("getting stuff from facebook");
        resolve({ user: "Name" });
    }, 5000);
});

Promise.all([yt, fb]).then(result => console.log(result));