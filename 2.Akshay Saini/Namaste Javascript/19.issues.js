// console.log('start');

// setTimeout(function cb() {
//     console.log("Callback");
// }, 5000);

// console.log("End");

// Now lets try to block the main thread
// // million

// let startDate = new Date().getTime();
// let endDate = startDate;

// while(endDate < startDate + 10000) {
//     endDate = new Date().getTime();
// }


// console.log("While expires");

console.log('start');

setTimeout(function cb() {
    console.log("Callback");
}, 0);

console.log("End");

