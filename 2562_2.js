const numbers = require("fs")
  .readFileSync("devstdin")
  .toString()
  .split("\n")
  .map(Number);

const maxNumber = Math.max(...numbers);
const maxPlace = numbers.indexOf(maxNumber);
console.log(`${maxNumber}\n${maxPlace + 1}`);
