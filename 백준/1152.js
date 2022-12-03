const input = require("fs")
  .readFileSync("devstdin")
  .toString()
  .trim()
  .split(" ");

if (input == "") {
  console.log(0);
} else {
  console.log(input.length);
}
