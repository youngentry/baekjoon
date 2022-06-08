const [a, b] = require("fs")
  .readFileSync("devstdin")
  .toString()
  .split("\n")
  .map(Number);

let primeList = [];

function prime(i) {
  for (j = 2; j * j <= i; j++) {
    if (i % j == 0) {
      return false;
    }
  }
  return true;
}

for (i = a; i <= b; i++) {
  primeList.push(i);
  if (i == 1) {
    primeList.pop();
  }
  if (i == b) {
    let a = primeList.filter((i) => prime(i));
    if (a.length == 0) {
      console.log(-1);
    } else {
      let sum = 0;
      a.forEach((x) => {
        sum += x;
      });
      console.log(sum + "\n" + a[0]);
    }
  }
}
