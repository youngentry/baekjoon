const inputData = require("fs").readFileSync("devstdin").toString().split("\n");
const numberArrangement = inputData[1].split(" ").map(Number);

console.log(
  `${Math.min(...numberArrangement)} ${Math.max(...numberArrangement)}`
);
