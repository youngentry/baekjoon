function solution(park, routes) {
  // 이동 구현
  const cor = { E: [0, 1], S: [1, 0], W: [0, -1], N: [-1, 0] };
  const move = (at, direction, distance) => {
    const start = [...at];
    let flag = true;
    for (let i = 0; i < distance; i++) {
      // 장애물이나 벽에 막힘 구현
      at[0] += cor[direction][0];
      at[1] += cor[direction][1];
      if (at[0] < 0 || at[1] < 0 || at[0] > park.length - 1 || at[1] > park[0].length - 1) {
        flag = false;
        break;
      }
      if (park[at[0]][at[1]] == "X") {
        flag = false;
        break;
      }
    }

    if (flag) {
      return at;
    }
    return start;
  };

  let at = [0, 0];

  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[0].length; j++) {
      if (park[i][j] === "S") {
        at[0] = i;
        at[1] = j;
      }
    }
  }

  for (const route of routes) {
    const direction = route.split(" ")[0];
    const distance = route.split(" ")[1];
    at = move(at, direction, distance);
  }
  return at;
}

// ["방향 거리", "방향 거리" … ]
// 주어진 방향으로 이동할 때 공원을 벗어나는지 확인합니다.
// 주어진 방향으로 이동 중 장애물을 만나는지 확인합니다.
// 위 두 가지중 어느 하나라도 해당된다면, 로봇 강아지는 해당 명령을 무시하고 다음 명령을 수행

// ["SOO","OXX","OOO"] 스타트, 장애물
