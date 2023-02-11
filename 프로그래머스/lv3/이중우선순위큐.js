function solution(operations) {
  const numberArray = [];

  for (operation of operations) {
    const operationSplit = operation.split(" ");
    const command = operationSplit[0];
    const number = Number(operationSplit[1]);

    if (command === "I") {
      numberArray.push(number);
      continue;
    }

    if (numberArray.length === 0) {
      continue;
    } else if (number === 1) {
      numberArray.sort((a, b) => a - b);
      numberArray.pop();
    } else {
      numberArray.sort((a, b) => b - a);
      numberArray.pop();
    }
  }

  numberArray.sort((a, b) => b - a);
  return numberArray.length ? [numberArray[0], numberArray.at(-1)] : [0, 0];
}

solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"]);
