// 1. 해당 수의 소수를 구한다 2 3 5 7 11 13
// 2. 해당 수와 비교해 가장 큰 소수끼리 더한다.
// 3. 더한 값이 같을 경우 정지하고 같지 않을 경우 그 다음으로 큰 수를 더한다.
// 4. 정지했을 때의 값을 리스트에 담는다.
// 5. 리스트의 중간값을 출력한다.

const num = require("fs").readFileSync("devstdin").toString().split("\n");

function prime(i) {
  for (j = 2; j * j <= i; j++) {
    if (i % j == 0) {
      return false;
    }
  }
  return i;
}

for (k = 1; k <= num[0]; k++) {
  const arr = [];
  for (l = 2; l < num[k]; l++) {
    const p = prime(l);
    if (p != false) {
      arr.push(p);
    }
  }
  console.log(arr, arr.length, num[k]);
  const arr2 = [];
  for (m = arr.length - 1; m >= 0; m--) {
    for (n = arr.length - 1; n >= 0; n--) {
      if (arr[m] + arr[n] == num[k]) {
        arr2.push([arr[m], arr[n]]);
      }
    }
  }
  // console.log(arr2);
  // console.log(arr2[Math.floor(arr2.length / 2)].join(" "));
}
