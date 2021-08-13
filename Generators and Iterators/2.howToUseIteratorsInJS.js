// In javascript arrays are iterable by default

// What actually makes objects iterable?
// objects are iterable if it provides a means for you to retrieve and iterator for that object


// const numbers = [1, 2, 3];
// // const numbersIterator = numbers['length'](); // below can be treated as like this meant we are accessing 'Symbol.iterator' from
// // numbers like length
// const numbersIterator = numbers[Symbol.iterator]();

// console.log(numbersIterator.next());   // {value: 1, done: false}
// console.log(numbersIterator.next());   // {value: 2, done: false}
// console.log(numbersIterator.next());   // {value: 3, done: false}
// console.log(numbersIterator.next());   // {value: undefined, done: true}

// for(const n of numbers) {
//     console.log(n);
// }


/***************************************************************************************************************************************/

// 1, 4, 9, 16, 25

// function squared(max) {
//     return {
//         [Symbol.iterator]() {
//             let n = 0;

//             return {
//                 next() {
//                     n++;
        
//                     if(n <= max) {
//                         return {
//                             value: n * n,
//                             done: false
//                         };
//                     }
        
//                     return {
//                         value: undefined,
//                         done: true
//                     }
//                 }
//             };
//         }
//     };
// }

// for(const n of squared(10)) {
//     console.log(n);
// }


/***************************************************************************************************************************************/

// const [a, b, c] = [4, 5, 6];

// console.log(a);
// console.log(b);
// console.log(c);


/***************************************************************************************************************************************/

// function squared(max) {
//     return {
//         [Symbol.iterator]() {
//             let n = 0;

//             return {
//                 next() {
//                     n++;
        
//                     if(n <= max) {
//                         return {
//                             value: n * n,
//                             done: false
//                         };
//                     }
        
//                     return {
//                         value: undefined,
//                         done: true
//                     }
//                 }
//             };
//         }
//     };
// }

// const [a, b, c] = squared(10);

// console.log(a);   // 1
// console.log(b);   // 4
// console.log(c);   // 9


/***************************************************************************************************************************************/

// function squared(max) {
//     return {
//         [Symbol.iterator]() {
//             let n = 0;

//             return {
//                 next() {
//                     n++;
        
//                     if(n <= max) {
//                         return {
//                             value: n * n,
//                             done: false
//                         };
//                     }
        
//                     return {
//                         value: undefined,
//                         done: true
//                     }
//                 }
//             };
//         }
//     };
// }

// const [a, b, c, d, e] = squared(10);

// console.log(a);   // 1
// console.log(b);   // 4
// console.log(c);   // 9
// console.log(d);   // 16
// console.log(e);   // 25


/***************************************************************************************************************************************/

// class NumberList {
//     constructor() {
//         this.numbers = [1, 2, 3, 4];
//     }

//     [Symbol.iterator]() {
//         const numbers = this.numbers;
//         let currentIndex = -1;

//         return {
//             next() {
//                 return {
//                     value: numbers[++currentIndex],
//                     done: currentIndex >= numbers.length
//                 }
//             }
//         }
//     }
// }

// const numListIterator = new NumberList()[Symbol.iterator]();

// console.log(numListIterator.next());   // {value: 1, done: false}
// console.log(numListIterator.next());   // {value: 2, done: false}
// console.log(numListIterator.next());   // {value: 3, done: false}
// console.log(numListIterator.next());   // {value: 4, done: false}
// console.log(numListIterator.next());   // {value: undefined, done: true}


/***************************************************************************************************************************************/

class NumberList {
    constructor() {
        this.numbers = [1, 2, 3, 4];
    }

    [Symbol.iterator]() {
        const numbers = this.numbers;
        let currentIndex = -1;

        return {
            next() {
                return {
                    value: numbers[++currentIndex],
                    done: currentIndex >= numbers.length
                }
            }
        }
    }
}

const numList = new NumberList();

for(const number of numList) {
    console.log(number);
}

// 1
// 2
// 3
// 4