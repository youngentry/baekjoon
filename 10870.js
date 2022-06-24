const input = require("fs").readFileSync("devstdin").toString();

function fibo(input) {
  if (input == 0) {
    return 0;
  } else if (input == 1) {
    return 1;
  } else {
    return fibo(input - 1) + fibo(input - 2);
  }
}

console.log(fibo(input));
