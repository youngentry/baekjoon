let inputData = new Set(
  require("fs").readFileSync("devstdin").toString().split("")
);

inputData = [...inputData];
const string = inputData.join("");

let result = "";

for (i = 97; i < 123; i++) {
  // 97~122 : a to z
  let count = "-1";
  for (j = 0; j < string.length; j++) {
    if (string.charCodeAt(j) == i) {
      count = String(j);
    }
  }
  result += count + " ";
}

console.log(result);
