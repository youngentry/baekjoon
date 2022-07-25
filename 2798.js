const [a, b] = require("fs").readFileSync("devstdin").toString().split("\n");

const n = a.split(" ")[0];
const blackjack = a.split(" ")[1];
const nums = b.split(" ").map((x) => parseInt(x));

let count = 0;
for (i = 0; i < n - 2; i++) {
  for (j = i + 1; j < n - 1; j++) {
    for (k = j + 1; k < n; k++) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum <= blackjack && sum > count) {
        count = sum;
      }
    }
  }
}

console.log(count);
