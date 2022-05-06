const inputData = require("fs").readFileSync("devstdin").toString().split("\n");

for (i = 1; i <= inputData[0]; i++) {
  const line = inputData[i].toString().split(" ").map(Number);
  const n = line[0];
  let sum = 0;
  for (j = 1; j <= n; j++) {
    sum += line[j];
  }
  let average = sum / n;
  let goodStudentCount = 0;
  for (k = 1; k <= n; k++) {
    if (line[k] > average) {
      goodStudentCount += 1;
    }
  }

  result = (goodStudentCount / n) * 100;

  console.log(result.toFixed(3) + "%");
}
