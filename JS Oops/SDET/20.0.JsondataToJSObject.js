// First you need to convert the JSON data into JavaScript object and by that object or from that object we can extract the data

// check once how JSON data looks like in google

let text = '{ "employees" : [' +
'{ "firstName":"Ravindra" , "lastName":"Reddy" },' + 
'{ "firstName":"Phanindra" , "lastName":"Reddy" },' + 
'{ "firstName":"Satwik" , "lastName":"Reddy" } ]}';

let obj = JSON.parse(text);

console.log(obj.employees[1].firstName+"    "+obj.employees[1].lastName);