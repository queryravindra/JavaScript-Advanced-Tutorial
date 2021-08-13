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

// loginUser("ed", "bumba")
//     .then( user => getUserVideos(user.email))
//     .then( videos => videoDetails(videos[0]))
//     .then( detail => console.log(detail));


async function displayUser() {
    try {
        const loggedUser = await loginUser('ed', 123456);
        const videos = await getUserVideos(loggedUser.userEmail);
        const detail = await videoDetails(videos[0]);
        console.log(detail);
    }
    catch(err){
        console.log('We could not get the videos');
    }
}

displayUser();


console.log("Finish");