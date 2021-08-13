// Current Date + Time
let m = moment();

// Create from ISO 8601 string
m = moment("2019-05-19");

m = moment("2019-05-19T23:10:00.000");

m = moment("2019-05-19T23:10:00.000+05:00");

// Using a format
m = moment("14/06/2019 4:50PM", "DD/MM/YYYY h:mmA");

// Create using milliseconds since epoch (1st Jan 1970)
m = moment(600000);

// Create using seconds since epoch (1st Jan 1970)
m = moment.unix(7200);

// Create a moment object in UTC mode
m = moment.utc();

m = moment.utc("2019-05-19T23:10:00.000");

console.log(`toString() => ${m.toString()}`);   // Local
console.log(`toISOString() => ${m.toISOString()}`);  // UTC


