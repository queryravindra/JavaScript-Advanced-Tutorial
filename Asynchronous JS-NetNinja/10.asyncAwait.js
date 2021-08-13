// async & await

// what basically allows to do is chain promises in clean much more readible way


// const getTodos = async () => {

// };

// the above func is known as asynchronous function 
// whenever we call asynchronous function that will always return promise regardless of what is there inside

// const getTodos = async () => {
//     // fetch returns a promise and this await keyword is stops us from assigning a value to this 'response' variable until
//     // that promise has been resolved
//     // ones the promise has resolved we can take the value from that resolve function then assign it to this 'response' variable

//     const response = await fetch('todos/luigi.json');
//     const data = await response.json();  // response.json() which inturns return new promise
//     return data;
// };

// getTodos();


// fetch('todos/luigi.json').then( response => {
//     console.log('resolved', response);
//     return response.json();
// }).then( data => {
//     console.log(data);
// }).catch( err => {
//     console.log('rejected', err);
// });



// The power of await keyword is if we want we could change many

// const getTodos = async () => {
//     const response = await fetch('todos/luigi.json');
//     const data = await response.json();
//     const response = await fetch('todos/luigi.json');
//     const data = await response.json();
//     const response = await fetch('todos/luigi.json');
//     const data = await response.json();
//     return data;
// };

// getTodos();



// const getTodos = async () => {
//     const response = await fetch('todos/luigi.json');
//     const data = await response.json();

//     return data;
// };

// const test = getTodos();
// console.log(test);  // this is not gonna be data itself ,it still gonna be promise but instead what we goona do is..

// async function is non blocking i.e., an async func starts now finishes later and let js code carry on with the rest of code


const getTodos = async () => {
    const response = await fetch('todos/luigi.json');
    const data = await response.json();

    return data;
};

console.log(1);
console.log(2);

getTodos()
    .then( data => console.log('resolved:', data));

console.log(3);
console.log(4);

// How async really achieved for us...
// 1.use with async func is we can bundle all asynchronous code inside a function right here,
// which we can use and call whenever we want now

// 2.It is an async function and not gonna block rest of the block in our apploication as you just seen above

// 3.It gives us a much cleaner way to chain promises together like these which is much more readable
// 4.it does not supports in some browsers like IE but modern browsers would support this