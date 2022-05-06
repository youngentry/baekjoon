const [n, scoreArr] = require("fs")
  .readFileSync("devstdin")
  .toString()
  .split("\n");

const scores = scoreArr.toString().split(" ").map(Number);
const highScore = Math.max(...scores);
const newScores = scores.map((score) => (score / highScore) * 100);

let result = 0;

newScores.map((score) => (result += score));

console.log(result / n);
