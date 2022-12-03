const inputNumber = require("fs").readFileSync("stdin.txt");

for (step = 1; step <= inputNumber; step++) {
  console.log("*".repeat(step));
}
