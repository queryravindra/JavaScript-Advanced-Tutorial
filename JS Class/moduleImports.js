// import User from "./moduleExports";   //(new syntax)

const User = require("./moduleExports");

const ravindra = new User("Ravindra", "mrmrr142@gmail.com");

console.log(ravindra.getInfo());