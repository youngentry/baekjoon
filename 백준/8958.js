const inputData = require("fs").readFileSync("devstdin").toString().split("\n");

for (i = 1; i <= inputData[0]; i++) {
  let score = 0;
  let serialNumber = 0;
  for (j = 0; j <= inputData[i].length; j++) {
    if (inputData[i][j] == "O") {
      serialNumber += 1;
      score += serialNumber;
    } else {
      serialNumber = 0;
    }
  }
  console.log(score);
}
