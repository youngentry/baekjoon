let input = require("fs").readFileSync("devstdin").toString();

if (input.length == 1) {
  input = "0" + input;
}
let start = input;
let count = 0;

while (true) {
  let plus = (Number(start[0]) + Number(start[1])).toString();
  let num = start[1] + plus[plus.length - 1];
  start = num;
  count += 1;
  if (num == input) {
    break;
  }
}
console.log(count);
