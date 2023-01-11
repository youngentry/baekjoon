function solution(n, wires) {
  let answer = n;

  const adjacentTowerMap = new Map();

  // 각각의 송전탑과 인접해 있는 송전탑의 연결관계를 정리한다.
  //   Map(7) {
  //     1 => [ 2 ],
  //     2 => [ 1, 7 ],
  //     4 => [ 3, 5 ],
  //     5 => [ 4 ],
  //     6 => [ 7 ],
  //     7 => [ 2, 3, 6 ]
  //   }
  for (let i = 1; i <= n; i++) {
    const towerLinkedToRootArray = [];
    for (let j = 0; j < wires.length; j++) {
      if (wires[j][0] === i) towerLinkedToRootArray.push(wires[j][1]);
      if (wires[j][1] === i) towerLinkedToRootArray.push(wires[j][0]);
    }
    adjacentTowerMap.set(i, towerLinkedToRootArray);
  }

  for (let i = 0; i < wires.length; i++) {
    // [1,3] 뿌리 송전탑(1)과 이어진 전선(3)을 끊고 연결되어 있는 송전탑의 수를 확인한다.
    const root = wires[i][0];
    const wireLickedWithRoot = wires[i][1];
    const towerSet = new Set();
    towerSet.add(root);

    for (let tower of towerSet.keys()) {
      adjacentTowerMap.get(tower).forEach((linkedWire) => {
        if (linkedWire !== wireLickedWithRoot) {
          towerSet.add(linkedWire);
        }
      });
    }
    // [1,2] Set(1) { 1 }
    // [2,7] Set(2) { 2, 1 }
    // [3,7] Set(3) { 3, 4, 5 }
    // [3,4] Set(5) { 3, 7, 2, 6, 1 }
    // [4,5] Set(6) { 4, 3, 7, 2, 6, 1 }
    // [6,7] Set(1) { 6 }

    // 전체송전탑의 수(n)에서 연결되어 있는 송전탑의 수를 뺀 나머지 송전탑의 수(7 - 3 = 4)와의 차이를 구한다(4 - 3 = 1)
    answer = Math.min(answer, Math.abs(n - towerSet.size * 2));
  }

  console.log(answer);
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
