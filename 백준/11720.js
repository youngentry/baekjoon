const inputData = require("fs").readFileSync("devstdin").toString().split("\n");

let number = inputData[1].split("");
let sum = 0;

for (i = 0; i < inputData[0]; i++) {
  sum += Number(number[i]);
}
console.log(sum);
