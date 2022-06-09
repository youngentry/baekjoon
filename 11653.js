const input = require("fs").readFileSync("devstdin").toString();

for (i = 2; i * i <= input; i++) {
  let num = input;
  while (num % i == 0) {
    num = num / i;
    console.log(i, num);
  }
}
