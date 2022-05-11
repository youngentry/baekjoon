const inputData = require("fs").readFileSync("devstdin").toString().split("");

let result = "";

for (i = 97; i < 123; i++) {
  // 97~122 : a to z
  result += inputData.indexOf(String.fromCharCode(i)) + " ";
}

console.log(result);
