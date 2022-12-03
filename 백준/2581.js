const [a, b] = require("fs")
  .readFileSync("devstdin")
  .toString()
  .split("\n")
  .map(Number);

let arr = [];

function prime(i) {
  for (j = 2; j * j <= i; j++) {
    if (i % j == 0) {
      return false;
    }
  }
  return true;
}

for (i = a; i <= b; i++) {
  arr.push(i);
  if (i == 1) {
    arr.pop();
  }
  if (i == b) {
    let primeList = arr.filter((i) => prime(i));
    if (primeList.length == 0) {
      console.log(-1);
    } else {
      let sum = 0;
      primeList.forEach((x) => {
        sum += x;
      });
      console.log(sum + "\n" + primeList[0]);
    }
  }
}
