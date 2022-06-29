const n = require("fs").readFileSync("devstdin").toString();

let arr = [];
for (i = 0; i < n; i++) {
  arr[i] = [];
  for (j = 0; j < n; j++) {
    if (i == j && i != 0 && j != 0 && i != n - 1 && j != n - 1) {
      arr[i][j] = "";
    } else {
      arr[i][j] = "*";
    }
  }
}

function star(n) {
  console.log(arr);
}

star(n);
