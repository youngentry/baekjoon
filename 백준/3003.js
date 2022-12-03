const input = require("fs").readFileSync("devstdin").toString().split(" ");

let piece = [1, 1, 2, 2, 2, 8];
let result = "";

for (i = 0; i < 6; i++) {
    result += piece[i] - input[i] + " ";
}

console.log(result);
