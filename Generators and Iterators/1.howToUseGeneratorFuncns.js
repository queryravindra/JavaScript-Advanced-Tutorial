// function* generatorExample() {
//     yield 8;  // it executes and suspends too
//     yield 9;
//     yield 10;
// }

// // when you call generatorExample() like this you will get a generator object
// const generator = generatorExample();

// console.log(generator);
// // console.log(generator());  // Uncaught TypeError: generator is not a function

// console.log(generator.next());  // {value: 8, done: false}
// console.log(generator.next());  // {value: 9, done: false}
// console.log(generator.next());  // {value: 10, done: false}
// console.log(generator.next());  // {value: undefined, done: true}



// *********************************************************************************************************************



// function* generatorExample() {
//     yield 8;  
//     yield 9;
//     yield 10;

//     return 11;
// }

// const generator = generatorExample();

// console.log(generator);

// console.log(generator.next());  // {value: 8, done: false}  
// console.log(generator.next());  // {value: 9, done: false} 
// console.log(generator.next());  // {value: 10, done: false}
// console.log(generator.next());  // {value: 11, done: true}




// *********************************************************************************************************************



// function* generatorExample() {
//     yield 8;  
//     yield 9;
//     yield 10;

//     return 11;
//     yield 12;
// }

// const generator = generatorExample();

// console.log(generator);

// console.log(generator.next());  // {value: 8, done: false}  
// console.log(generator.next());  // {value: 9, done: false} 
// console.log(generator.next());  // {value: 10, done: false}
// console.log(generator.next());  // {value: 11, done: true}
// console.log(generator.next());  // {value: undefined, done: true}



// *********************************************************************************************************************



// function* generatorExample() {
//     yield 8;  
//     yield 9;
//     yield 10;

//     yield 11;
//     yield 12;
// }

// const generator = generatorExample();

// console.log(generator);

// console.log(generator.next());  // {value: 8, done: false}  
// console.log(generator.next());  // {value: 9, done: false} 
// console.log(generator.next());  // {value: 10, done: false}
// console.log(generator.next());  // {value: 11, done: false}
// console.log(generator.next());  // {value: 12, done: false}



// *********************************************************************************************************************



// function* generatorExample() {
//     yield 8;  
//     yield 9;
//     yield 10;
//     yield 11;
//     yield 12;
// }

// for(const n of generatorExample()) {
//     console.log(n);
// }

// 8
// 9
// 10
// 11
// 12



// *********************************************************************************************************************



// function* generatorExample() {
//     let a = 0;   // when you start using variables its gonna maintains its value

//     yield 8;  
//     yield 9;
//     yield 10;
//     yield 11;
//     yield 12;
// }

// for(const n of generatorExample()) {
//     console.log(n);
// }



// *********************************************************************************************************************
// I want: 1, 4, 9, 16, 25, 36...

// function* createSquaredNumbersGenerator() {
//     let n = 0;

//     while(true) {
//         n++;
//         yield n * n;
//     }
// }

// const squaredNumbers = createSquaredNumbersGenerator();
// console.log(squaredNumbers.next().value);  // 1
// console.log(squaredNumbers.next().value);  // 4
// console.log(squaredNumbers.next().value);  // 9


// *********************************************************************************************************************



// function* createSquaredNumbersGenerator(max) {
//     let n = 0;

//     while(n < max) {
//         n++;
//         yield n * n;
//     }
// }

// for(const n of createSquaredNumbersGenerator(10)) {
//     console.log(n);   // 1 to 100
// }



// *********************************************************************************************************************

function* createUniqueRandomGenerator(array) {
    const available = array;

    while(available.length !== 0) {
        const randomIndex = Math.floor(Math.random() * available.length);
        const value = available[randomIndex];

        // Removed the used value from the list of available values
        available.splice(randomIndex, 1);

        yield value;
    }
}


const names = ["Dom", "Shelly", "Timmy", "Marie"];
const uniqueNames = createUniqueRandomGenerator(names);

for (const name of uniqueNames) {
    console.log(name);
}