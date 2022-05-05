const numbers = require("fs")
  .readFileSync("devstdin")
  .toString()
  .split("\n")
  .map(Number);

const maxNumber = Math.max(...numbers);
let maxPlace = 1;

for (step = 0; step < numbers.length; step++) {
  console.log(maxPlace);
  console.log(numbers[step]);
  if (maxNumber != numbers[step]) {
    maxPlace += 1;
  } else if (maxNumber == numbers[step]) {
    break;
  }
}
console.log(`${maxNumber}\n${maxPlace}`);
