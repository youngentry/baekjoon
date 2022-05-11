const inputData = require("fs").readFileSync("devstdin").toString().split("\n");

for (i = 1; i <= inputData[0]; i++) {
  let result = "";
  let testCase = inputData[i];
  const repeatCount = testCase[0];

  for (j = 2; j < testCase.length; j++) {
    result += testCase[j].repeat(repeatCount);
  }
  console.log(result);
}
