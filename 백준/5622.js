const inputData = require("fs").readFileSync("devstdin").toString().split("");

const dial = {
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
};

let time = 0;

for (i = 0; i < inputData.length; i++) {
  for (j = 2; j < 10; j++) {
    dial[j].includes(inputData[i]) ? (time += j + 1) : (time = time);
  }
}

console.log(time);
