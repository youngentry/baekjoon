const inputNumber = require("fs").readFileSync("devstdin").toString();

console.log(inputNumber.charCodeAt(0));
