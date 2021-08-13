const m = moment();

// console.log(m.format("dddd"));   // day of the week

// console.log(m.format("dddd MMM Mo YYYY"));

// console.log(m.format("[Yeah the day is] dddd [and we're in] YYYY"));
// console.log(m.format("[dddd Yeah the day is] dddd [and we're in] YYYY"));

// m.locale("en-au");

// console.log(m.format("L"));   // 07/01/2021

// const m2 = moment("2021-06-13");
const m2 = moment("2021-01-13");

// console.log(m2.fromNow());
// console.log(m2.from("2021-02-10"));
// console.log(m2.from(m));


// const eventMoment = moment().add(2, "hours");
// console.log(eventMoment.toString());
// console.log(eventMoment.calendar());

// const eventMoment = moment().add(6, "days");
// const eventMoment = moment().add(15, "days");  // extend behind week it gives normal format
// console.log(eventMoment.calendar());

// console.log(m2.diff(m));  // -14633397602 ms
// console.log(m.diff(m2));  // 14633561910
// console.log(m.diff(m2, "days"));   // 169
// console.log(m.diff(m2, "weeks"));   // 24
// console.log(m.diff(m2, "weeks", true));   // 24.196011984126983

// console.log(m.valueOf());   // 1625113006915
// console.log(m.unix());   // 1625113044
// console.log(m.daysInMonth());

// console.log(JSON.stringify(m2));

// const jsonObj = {
//     momentObj: m2
// };

// console.log(JSON.stringify(jsonObj));

m2.toJSON = function() {
    // return "dom";
    return this.format("[this is JSON, btw here is the date:] MM/DD/YYYY");
};


const jsonObj = {
    momentObj: m2
};

console.log(JSON.stringify(jsonObj));
// console.log(m.toString());