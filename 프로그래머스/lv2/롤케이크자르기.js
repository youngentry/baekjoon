function solution(topping) {
  let count = 0;

  const aMap = new Map();
  const bMap = new Map();

  // bMap에 토핑별 갯수 저장하기   Map(4) { 1 => 4, 2 => 2, 3 => 1, 4 => 1 }
  topping.forEach((number) => bMap.set(number, bMap.get(number) ? bMap.get(number) + 1 : 1));

  // topping의 왼쪽 원소부터 하나씩 bMap에서 aMap으로 이동시키기
  topping.forEach((number) => {
    aMap.set(number, aMap.get(number) ? aMap.get(number) + 1 : 1);
    bMap.set(number, bMap.get(number) - 1);

    // bMap에 토핑 갯수가 0이 되면 해당 토핑 종류 삭제하기
    if (bMap.get(number) === 0) {
      bMap.delete(number);
    }

    // aMap과 bMap의 토핑 종류가 같다면 count +1
    if (aMap.size === bMap.size) {
      count++;
    }
  });

  return count;
}

solution([1, 2, 1, 3, 1, 4, 1, 2]);
