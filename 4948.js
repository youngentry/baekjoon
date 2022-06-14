const input = require("fs")
  .readFileSync("devstdin")
  .toString()
  .split("\n")
  .map((x) => x.trim());

function prime(j) {
  for (k = 2; k * k <= j; k++) {
    if (j == 1) {
      return false;
    }
    if (j % k == 0) {
      return false;
    }
  }
  return 1;
}

for (i = 0; i <= input.length - 1; i++) {
  let count = 0;
  let num = Number(input[i]);
  if (num == 0) {
    break;
  }
  for (j = num + 1; j <= num * 2; j++) {
    count += prime(j);
  }
  console.log(count);
}
