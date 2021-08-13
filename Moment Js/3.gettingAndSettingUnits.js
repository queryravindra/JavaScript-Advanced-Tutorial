const m = moment();

// console.log(m.toString());

// // Getting units
// console.log(m.minutes());
// console.log(m.hour());
// console.log(m.hours());
// console.log(m.week());

// console.log(m.quarter());
// console.log(m.get("quarter"));  // which quarter of the year

// Setting units
m.minutes(52);
m.minutes(65);  // over left to be 5 min
m.hour(14);
m.week(4);

m.set("day", 5);  // 0-6(sun-sat)
m.set("day", 8);  // jump to next week

// console.log(m.toString());

// min and max
const differentMoment = moment("2019-05-25");

console.log(moment.max(m, differentMoment).toString());   // m -> current date
console.log(moment.min(m, differentMoment).toString());
console.log(moment.max(moment(), differentMoment).toString());
