let x = Number(require("fs").readFileSync("devstdin").toString().trim());

let count = 0;
let round = 0;

while (count < x) {
  round++;
  count = count + round;
}

console.log(count, round);

if (round % 2 == 1) {
  console.log(`${count - x + 1}/${-count + x + round}`);
} else {
  console.log(`${-count + x + round}/${count - x + 1}`);
}
