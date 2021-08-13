// const posts = [
//     { title: 'Post One', body: 'This is post one' },
//     { title: 'Post Two', body: 'This is post two' },
// ];

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post) {
//     setTimeout(() => {
//         posts.push(post);
//     }, 2000);
// }

// getPosts();

// createPost({ title: 'Post Three', body: 'This is post three' });

// where is post three in DOM the reason becz is they craete post took longer then the get post
// getPost happend in one sec (out server returned in one sec ), createPost took 2 sec.
// but by the time we run this createPost theDom is already painted now we cant do beyond on that point
// so this is where async prog comes in, this is where callabcks comes in which is one way to handle it




const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
