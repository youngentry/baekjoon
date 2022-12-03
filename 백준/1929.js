const [m, n] = require("fs")
  .readFileSync("devstdin")
  .toString()
  .split(" ")
  .map(Number);

function prime(i) {
  if (i == 1) {
    return false;
  }
  for (j = 2; j * j <= i; j++) {
    if (i % j == 0) {
      return false;
    }
  }
  return console.log(i);
}

for (i = m; i <= n; i++) {
  prime(i);
}
