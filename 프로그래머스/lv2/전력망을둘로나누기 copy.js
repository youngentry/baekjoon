function solution(n, wires) {
  let answer = n - 2;
  // 1. 송전탑끼리의 연결된 선 정보(wires)를 통해
  //    각 송전탑이 연결된 송전탑 리스트를 만든다.(Map 활용)
  let wireMap = wires.reduce((prev, cur) => {
    prev.set(cur[0], prev.get(cur[0]) ? [...prev.get(cur[0]), cur[1]] : [cur[1]]);
    prev.set(cur[1], prev.get(cur[1]) ? [...prev.get(cur[1]), cur[0]] : [cur[0]]);
    return prev;
  }, new Map());

  console.log(wireMap);

  // 2. 모든 전선(wires)를 하나씩 끊어보면서 두 전력망의 송전탑 개수 차를 구한다.
  for (let i = 0; i < wires.length; i++) {
    // 3. 2번을 통해 구한 두 전력망의 송전탑 개수 차의 최소값을 반환한다.
    answer = Math.min(getDiffOfDividedArea(i), answer);
  }

  function getDiffOfDividedArea(curIndex) {
    // 2-1. 두 전력망 차이를 구할 때,
    //      하나의 전력망 내 송전탑 개수를 구한다. (Set 활용)
    let leftConnection = new Set();
    leftConnection.add(wires[curIndex][0], 1);
    for (let v of leftConnection.keys()) {
      console.log(leftConnection.keys(), "vvvvvvv");
      wireMap.get(v).forEach((value) => {
        if (value !== wires[curIndex][1]) {
          leftConnection.add(value, 1);
        }
      });
    }
    console.log(leftConnection);
    // 2-2. 전체 송전탑 개수(n)에서
    //      (하나의 전력망 개수 * 2)를 뺀 절대값이
    //      두 전력망의 송전탑 개수 차이다.
    return Math.abs(n - leftConnection.size * 2);
  }

  return answer;
}

solution(7, [
  [1, 2],
  [2, 7],
  [3, 7],
  [3, 4],
  [4, 5],
  [6, 7],
]);
