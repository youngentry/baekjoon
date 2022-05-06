const inputData = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (i = 0; i < inputData.length; i++) {
  let [a, b] = inputData[i].toString().split(" ").map(Number);
  console.log(a + b);
}

// 10952 에서 length -1 -> length 로 바꾸어주면 됩니다.
