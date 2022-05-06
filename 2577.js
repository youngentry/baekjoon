const [a, b, c] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n");

const multipliedNumber = a * b * c;

for (step = 0; step <= 9; step++) {
  console.log(multipliedNumber.toString().split(step).length - 1);
}
