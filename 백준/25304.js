const input = require("fs").readFileSync("devstdin").toString().trim().split("\n");

const price = input[0];

let calculate = 0;

for (i = 2; i < input.length; i++) {
    calculate += input[i].split(" ")[0] * input[i].split(" ")[1];
}

calculate == price ? console.log("Yes") : console.log("No");
