const n = require("fs").readFileSync("devstdin");

let count = 0;

for (i = 1; i <= n; i++) {
  i = String(i);
  if (i < 100) {
    count += 1;
  }

  if (Number(i[0]) - Number(i[1]) == Number(i[1]) - Number(i[2])) count += 1;
}
console.log(count);
