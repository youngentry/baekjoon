let inputData = require("fs").readFileSync("devstdin").toString().trim();

let result = inputData.replace(/c=|c-|dz=|d-|lj|nj|s=|z=/g, "0");

console.log(result, result.length);
