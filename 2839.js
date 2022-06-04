let n = Number(require("fs").readFileSync("devstdin").toString());

let kg3 = 0;

while (true) {
  if (n % 5 == 0) {
    console.log(n / 5 + kg3);
  }
  if ((n % 5 == 1) | (n % 5 == 2)) {
    console.log(-1);
  }
  kg3++;
  n = +3;
}
