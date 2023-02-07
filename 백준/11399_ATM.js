const get = (number, timeString) => {
  // const [number, timeString] = require("fs").readFileSync("dev/stdin").toString().split("\n");

  const timeArray = timeString.split(" ").map(Number);
  timeArray.sort((a, b) => a - b);

  let count = 0;

  timeArray.forEach((el, index) => {
    count += el * (number - index);
  });

  console.log(count);

  return count;
};

get(5, "3 1 4 3 2");
