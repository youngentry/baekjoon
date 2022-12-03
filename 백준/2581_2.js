const [a, b] = require("fs")
  .readFileSync("devstdin")
  .toString()
  .split("\n")
  .map(Number);

let priLi = [];

function prime(i) {
  for (j = 2; j * j <= i; j++) {
    if (i % j == 0) {
      return false;
    }
  }
  return true;
}

for (i = a; i <= b; i++) {
  priLi.push(i);
  if (i == 1) {
    priLi.pop();
  }
  if (i == b) {
    priLi.filter((i) => prime(i));
    if (priLi.length == 0) {
      console.log(-1);
    } else {
      console.log(priLi.filter((i) => prime(i)).reduce((a, b) => a + b));
      console.log(priLi[0]);
    }
  }
}
