const [a, b] = require("fs").readFileSync("devstdin").toString().split("\n");

function prime(n) {
  if (n == 1) {
    return false;
  }
  for (i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(b.split(" ").filter((n) => prime(n)).length);
