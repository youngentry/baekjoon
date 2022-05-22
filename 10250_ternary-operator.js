const input = require("fs")
  .readFileSync("devstdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim());

for (i = 1; i <= input[0]; i++) {
  let [h, w, n] = input[i].split(" ");
  for (j = 1; j <= h * w; j++) {
    if (n == j) {
      let y = "";
      y = n % h == 0 ? (y = h) : (y = `${n % h}`);

      let x = `${Math.ceil(j / h)}`;
      if (x.length == 1) {
        x = `0${x}`;
      }

      console.log(y + x);
    }
  }
}
