// fetch api

// fetch('todos/luigi.json').then( response => {
//     console.log('resolved', response);
// }).catch( err => {
//     console.log('rejected', err);
// })

// Even if the API endpoint was wrong it still gets that it is resolved and response is shown and still gets the error

// So, the way the fetch API works is the promise only rejected when we gets some kind of network error

// Even if we do console.log() above one, we can see that it is resolved but we cannot see that json data anywhere we need,
//  even if we expand body i cant see any data here but when we open __proto__ we can see json() method right there
// so what we can do use this method on the response object and that actually gets us the data we need


// fetch('todos/luigi.json').then( response => {
//     console.log('resolved', response);
//     response.json();
// }).catch( err => {
//     console.log('rejected', err);
// })


// const data = response.json() => it doesn't work here becz and the reason is becz response.json() which inturn returns a promise
// so remember promise is something that typically takes a little bit of time to do and it can either be rejected or resolved
// so this is returns a promise in that case what we can do is instead return from that(overall fetch now returns a promise)

fetch('todos/luigi.json').then( response => {
    console.log('resolved', response);
    return response.json();
}).then( data => {
    console.log(data);
}).catch( err => {
    console.log('rejected', err);
});