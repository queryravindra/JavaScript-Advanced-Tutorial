// console.log(moment("2019-06-04").isSame("2019-06-04"));   // true
// console.log(moment("2019-06-04").isSame("2019-06-03"));   // false

// console.log(moment("2019-06-04 15:35:32.765").isSame("2019-06-04 15:35:32.765"));   // true
// console.log(moment("2019-06-04 15:35:32.765").isSame("2019-06-04 15:35:32.764"));   // false

// console.log(moment("2019-06-04 15:35:32").isSame("2019-06-04 15:35:32", "hour"));   // true
// console.log(moment("2019-06-04 14:35:32").isSame("2019-06-04 15:35:32", "hour"));   // true

// console.log(moment("2019-06-04 14:35:32").isSame("2019-06-04 15:35:32", "day"));   // true



// console.log(moment("2019-06-04").isBefore("2019-06-03"));   // false
// console.log(moment("2019-06-04").isBefore("2019-06-05"));   // true

// console.log(moment("2019-06-04").isBefore("2019-07-18"));   // true
// console.log(moment("2019-06-04").isBefore("2019-07-18", "year"));   // false

// console.log(moment("2018-06-04").isBefore("2019-07-18", "year"));   // true

// console.log(moment("2019-06-04").isBefore("2019-06-02", "week"));   // false

// // llry .isAfter()
// console.log(moment("2019-06-05").isAfter("2019-06-03"));   // true
// console.log(moment("2019-06-05").isAfter(moment("2019-06-03")));   // true


// console.log(moment("2019-06-04").isSameOrBefore("2019-06-04"));   // true



const m1 = moment("2019-06-06");
// const m2 = moment("2019-06-05");
// const m3 = moment("2019-06-07");

// console.log(m2.isBetween(m1, m3));   // false


// console.log(moment("2019-10-06 01:59:59").locale("en-au").isDST());
// console.log(moment("2021-10-06 02:00:00").locale("en-au").isDST());


// console.log(moment.isMoment(m1));   // true
// console.log(moment.isMoment({    // false
//     name: "dom"
// }));


console.log(moment.isDate(new Date()));   // true
console.log(moment.isDate(m1));   // false
console.log(moment.isDate({ name: "dom" }));   // false