const m = moment();

console.log(`Original Moment: ${m.toString()}`);

// m.add(4, "hours");
// m.add(4, "h");
// m.add(15, "minutes");

// m.add(4, "hours").add(15, "minutes");

// m.add({
//     "hours": 7,
//     "minutes": 15
// });

// m.subtract({
//     "hours": 7,
//     "minutes": 15
// });

// m.startOf("hour");
// m.startOf("year");
// m.endOf("day");

// console.log(`After Manipulation: ${m.toISOString()}`);   // ISO 8601 format in UTC

m.utc();  // 00:00
// m.local();

console.log(m.utcOffset());  // GMT

m.utcOffset(5);   // GMT+0500  (-15 to 15)hrs
m.utcOffset(300);   // GMT+0500 -> min  (out of above)mins
m.utcOffset("+03:00");   // GMT+0300
m.utcOffset("-03:00");   // GMT-0300


console.log(`After Manipulation: ${m.toString()}`);
