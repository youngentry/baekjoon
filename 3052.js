const inputData = require("fs")
  .readFileSync("devstdin")
  .toString()
  .split("\n")
  .map(Number);

let set = new Set();

for (step = 0; step < 10; step++) {
  set.add(inputData[step] % 42);
}
console.log(set);
console.log(set.size);
