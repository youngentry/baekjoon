const word = require("fs")
  .readFileSync("devstdin")
  .toString()
  .trim()
  .toUpperCase()
  .split("")
  .sort();
console.log(word);
let count = 1;
let maxCount = 0;
let alphabet = "";

for (i = 0; i < word.length; i++) {
  if (word[i] == word[i + 1]) {
    count += 1;
  } else if (word[i] != word[i + 1]) {
    count = 1;
  }

  if (maxCount < count) {
    maxCount = count;
    alphabet = word[i];
  } else if (maxCount == count) {
    alphabet = "?";
  }
}

console.log(alphabet);
