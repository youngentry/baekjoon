const inputData = require("fs")
  .readFileSync("devstdin")
  .toString()
  .trim()
  .split("\n");

for (i = 0; i < inputData.length - 1; i++) {
  let [a, b] = inputData[i].toString().split(" ").map(Number);
  console.log(a + b);
}
