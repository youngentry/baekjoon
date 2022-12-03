const inputNumber = require("fs").readFileSync("stdin.txt");

for (step = 1; step <= inputNumber; step++) {
  let blank = " ".repeat(inputNumber - step);
  let star = "*".repeat(step);
  console.log(blank + star);
}
