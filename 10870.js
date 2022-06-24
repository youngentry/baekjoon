const input = require("fs").readFileSync("devstdin").toString();

let fibonacci1 = 0;
let fibonacci2 = 0;
let fibonacci3 = 0;
for (i = 0; i <= input; i++) {
  if (i == 0) {
    fibonacci1 = 0;
  } else if (i == 1) {
    fibonacci2 = 1;
  } else {
    fibonacci3 = fibonacci1 + fibonacci2;
  }
}

console.log(fibonacci3);
