const { copyFileSync } = require("fs");
const { loadavg } = require("os");

const num = require("fs").readFileSync("devstdin").toString().trim().split("\n");

function prime(i) {
  for (j = 2; j * j <= i; j++) {
    if (i % j == 0) {
      return false;
    }
  }
  return i;
}

const arr = [];
for (k = 2; k < num[num.length - 1]; k++) {
  if (prime(k) != false) {
    arr.push(k);
  }
}

for (l = 1; l <= num[0]; l++) {
  const lowArr = arr.filter((p) => p < num[l]);
  const arr2 = [];

  // console.log(lowArr.length, 11111111);
  // console.log(Math.floor(lowArr.length / 2), 2222222);
  // console.log(lowArr[Math.floor(lowArr.length / 2)], "3333333--------------");
  for (i = Math.floor(lowArr.length / 2); i <= 0; i--) {
    for (j = Math.floor(lowArr.length / 2) - 1; j < lowArr.length; j++) {
      if (lowArr[i] + lowArr[j] == num[l]) {
        arr2.push([lowArr[i], lowArr[j]]);
      }
    }
  }

  console.log(arr2);
}
