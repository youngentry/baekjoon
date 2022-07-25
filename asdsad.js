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
  var arrP = arr.filter((x) => x <= num[l]);
  const arr2 = [];

  for (i = j; i < arr2.length; i++) {}

  console.log(arr2[Math.floor(arr2.length / 2)].join(" "));
}
