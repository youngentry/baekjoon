const inputNumber = require("fs").readFileSync("devstdin");

const eachNumber = inputNumber.toString().split("");

if (eachNumber.length == 1) {
  eachNumber.unshift("0");
}
let [a, b] = eachNumber;
let count = 0;
let changeThisIntoTrue = false;
let startNumber = a + b;

while (changeThisIntoTrue != true) {
  [a, b] = startNumber.toString().split("");
  let plusTwo = (Number(a) + Number(b)).toString().split("");
  let newNumber = b + plusTwo[plusTwo.length - 1];
  startNumber = newNumber;
  count += 1;

  if (newNumber == eachNumber.join("")) {
    changeThisIntoTrue = true;
  }
}
console.log(count);
