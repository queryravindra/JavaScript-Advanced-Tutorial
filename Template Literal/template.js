// The Advantage of Template Literals is that u dont need to escape the charecters

var nameSingle = 'Ravindra\'s';
var nameDouble = "Ravindra\"s";

var mainName = `Ravindra`;
var fullName = `${mainName} Reddy`;

console.log(fullName);
console.log(fullName.charAt(0));
console.log(fullName.endsWith('y'));
console.log(fullName.includes("Ravindra"));
console.log(fullName.toUpperCase());