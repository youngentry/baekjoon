let input = require("fs").readFileSync("devstdin").toString();

for (i = 2; i <= input; i++) {
  while (input % i == 0) {
    input = input / i;
    console.log(i);
    if (input == 1) {
      break;
    }
  }
}
