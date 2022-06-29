const n = require("fs").readFileSync("devstdin").toString();

for (i = 9; i <= n; i = i + 9) {
  console.log(i);
}
