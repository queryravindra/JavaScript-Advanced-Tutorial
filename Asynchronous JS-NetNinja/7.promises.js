// const getTodos = (resource, callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         if(request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText);
//             callback(undefined, data);
//         } else if(request.readyState === 4) {
//             callback('could not fetch data', undefined);
//         }
//     });

//     request.open('GET', resource);
//     request.send();
// };


// // promise example(Just Example)

// // const getSomething = () => {

// //     return new Promise((resolve, reject) => {
// //         // fetch something
// //         resolve('some data');
// //         // reject('some error');
// //     });
// // };

// const getSomething = () => {

//     return new Promise((resolve, reject) => {
//         // fetch something
//         // resolve('some data');
//         reject('some error');
//     });
// };

// // getSomething().then((data) => {
// //     // first callback function fires if we resolve
// //     console.log(data);
// // }, (err) => {
// //     // second one fires if we reject
// //     console.log(err)
// // });

// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });





const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState === 4) {
                reject('error getting resource');
            }
        });

        request.open('GET', resource);
        request.send();
    });
};

getTodos('todos/luigi.json').then( data => {
    console.log('promise resolved: ', data);
}).catch( err => {
    console.log('promise rejected:', err);
})


// const getSomething = () => {

//     return new Promise((resolve, reject) => {
//         // fetch something
//         // resolve('some data');
//         reject('some error');
//     });
// };

// getSomething().then((data) => {
//     // first callback function fires if we resolve
//     console.log(data);
// }, (err) => {
//     // second one fires if we reject
//     console.log(err)
// });

// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });