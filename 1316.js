const inputData = require("fs")
  .readFileSync("devstdin")
  .toString()
  .trim()
  .split("\n");

let count = 0;

for (i = 1; i <= inputData[0]; i++) {
  let wordList = [];
  let word = inputData[i].toString().trim().split("");
  for (j = 0; j < word.length; j++) {
    if (word[j] == word[j + 1]) {
      wordList.push(word[j]);
    } else if (word[j] != word[j + 1] && !wordList.includes(word[j + 1])) {
      wordList.push(word[j]);
    }
  }
  if (wordList.length == word.length) {
    count++;
  }
}

console.log(count);
