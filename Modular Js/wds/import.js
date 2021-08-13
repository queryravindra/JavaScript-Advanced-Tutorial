import User, { printName as printUserName, printAge } from "./export.js";   // { not default things }

const user = new User('Bob', 11);
console.log(user);
printUserName(user);