function solution(num_list, n) {
  let array = [];
  num_list.reverse();
  for (let i = 0; i <= num_list.length / n; i++) {
    const tempArray = [];

    for (j = 0; j < n; j++) {
      tempArray.push(num_list.pop());
    }
    array.push(tempArray);
  }

  console.log(array);
  return array;
}

const num_list = new Array(900_000).fill(0).map((_, index) => index + 1);
solution(num_list, 4);

function solution2(num_list, n) {
  let array = [];
  for (let i = 0; i < num_list.length; i + n) {
    array.push(num_list.splice(i, n));
  }
  console.log(array);
  return array;
}
solution2(num_list, 4);
