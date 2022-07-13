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
  var arrP = arr.filter((x) => x < num[l]);
  const arr2 = [];

  console.log("arr:", arrP, "num:", num[l], "arrPLength:", arrP.length);

  for (i = Math.floor(arrP.length / 2); i >= 0; i--) {
    for (j = Math.floor(arrP.length / 2) - 1; j < arrP.length; j++) {
      if (arr[i] + arr[j] == num[l]) {
        arr2.push([arr[i], arr[j]]);

        // console.log(arr[i], arr[j], "num:", num[l]);
      }
    }
  }
  // console.log(arr2, num[l]);

  // if (num[l] == 8) {
  //   console.log(arr2[1].join(" "));
  // } else {
  //   console.log(arr2[0].join(" "));
  // }

  // console.log(arr2[Math.floor(arr2.length / 2)].join(" "));
}
