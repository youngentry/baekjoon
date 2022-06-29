const n = require("fs").readFileSync("devstdin").toString();

let arr = [];
for (i = 0; i < n; i++) {
  arr[i] = [];
  for (j = 0; j < n; j++) {
    arr[i][j] = "*";
  }
}
for (i = 1; i < n; i = i + 3) {
  for (j = 1; j < n; j = j + 3) {
    arr[i][j] = "0";
  }
}

for (i = n / 3; i < n - n / 3; i++) {
  for (j = n / 3; j < n - n / 3; j++) {
    arr[i][j] = "0";
  }
}

for (i = 0; i < n; i++) {
  console.log(arr[i].join(""));
}
