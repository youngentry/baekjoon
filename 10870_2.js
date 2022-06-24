const input = require("fs").readFileSync("devstdin").toString();

let f1 = 0;
let f2 = 1;
let f3 = 0;
for (i = 0; i <= input; i++) {
  if (input == 0) {
    console.log(0);
    break;
  }
  if (input == 1) {
    console.log(1);
    break;
  }
  if (i >= 2) {
    f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
  }
  if (i == input) {
    console.log(f3);
  }
}
