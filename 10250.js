const input = require("fs")
  .readFileSync("devstdin")
  .toString()
  .split("\n")
  .map((x) => x.trim());

for (i = 1; i <= input[0]; i++) {
  let [h, w, n] = input[i].split(" ");
  for (j = 1; j <= h * w; j++) {
    if (n == j) {
      let y = `${n % h}`;
      if (n % h == 0) {
        y = h;
      }
      let x = `${Math.ceil(n / h)}`;
      if (x.length == 1) {
        x = `0${x}`;
      }
      console.log(y + x);
    }
  }
}
