let n = Number(require("fs").readFileSync("devstdin").toString());

let kg3 = 0;

while (n >= -2) {
  if (n % 5 == 0) {
    console.log(n / 5 + kg3);
    break;
  } else if (n < 0) {
    console.log(-1);
  }
  kg3++;
  n -= 3;
}
