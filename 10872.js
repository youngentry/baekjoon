const input = require("fs").readFileSync("devstdin").toString();

let result = 1;

for (i = 1; i <= input; i++) {
  if (input == 0) {
    console.log(1);
    break;
  }
  result = result * i;
}
console.log(result);
