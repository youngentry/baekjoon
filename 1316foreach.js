const inputData = require("fs")
  .readFileSync("devstdin")
  .toString()
  .trim()
  .split("\n");

let count = 0;

for (i = 1; i <= inputData[0]; i++) {
  let wordList = [];
  let word = inputData[i].toString().trim().split("");

  word.forEach((j, k, arr) => {
    if (j == arr[k + 1]) {
      wordList.push(j);
    } else if (j != arr[k + 1] && !wordList.includes(arr[k + 1])) {
      wordList.push(j);
    }
  });
  if (wordList.length == word.length) {
    count++;
  }
}

console.log(count);
