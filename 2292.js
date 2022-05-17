const n = require("fs").readFileSync("devstdin").toString();

// let result = 1;
// let newResult = 0;
// let i = 0;

// let count = 1;

// while (true) {
//   newResult = result + 6 * i;
//   result = newResult;
//   i += 1;
//   if (n > result) {
//     count += 1;
//   } else {
//     console.log(count);
//     break;
//   }
// }

let mass = 1;
let roomCount = 0;

while (roomCount < n - 1) {
  roomCount += 6 * mass;
  mass++;
}

console.log(mass);
