let dur;

dur = moment.duration(5000);
// dur = moment.duration(5, "seconds");
// dur = moment.duration(1, "day");

// console.log(dur.humanize());


// console.log(moment.duration(2, "weeks").days());   // 14  -> gets the days(0-30) this works for all min(0-59),hrs(0-23),...
// console.log(moment.duration(4, "weeks").days());   // 4
// console.log(moment.duration(5, "weeks").get("days"));   // 4
// console.log(moment.duration(5, "weeks").asDays());   // 35
// console.log(moment.duration(5, "weeks").as("seconds"));   // 3024000

// console.log(moment.duration(1, "day").add(1, "week").humanize());   // 8 days
// console.log(moment.duration(1, "day").subtract(1, "week").humanize());   // 6 days


const m1 = moment().add(2, "days");
const m2 = moment().add(1, "week");

console.log(moment.duration(m2.diff(m1)).asDays());   // 5.000000023148148   // m2.diff(m1) -> gives milliseconds


console.log(dur.toISOString());   // PT5S
