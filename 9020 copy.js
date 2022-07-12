const num = require("fs").readFileSync("devstdin").toString().split("\n");

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

const arr2 = [];
for (l = 1; l <= num[0]; l++) {
  for (m = arr.length - 1; m >= 0; m--) {
    if (num[l] > arr[m]) {
      for (n = arr.length - 1; n >= 0; n--) {
        if (num[l] > arr[n]) {
          if (arr[m] + arr[n] == num[l]) {
            arr2.push([arr[m], arr[n]]);
          }
        }
      }
    }
  }
  console.log(arr2);
  console.log(arr2[Math.floor(arr2.length / 2)].join(" "));
}
