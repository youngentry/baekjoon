const inputData = require("fs").readFileSync("devstdin").toString();
// 97~122 : a to z

let count = -1;

for (i = 0; i < inputData.length; i++) {
  console.log(inputData.charCodeAt(i));
}
