function solution(places) {
  const answer = [0, 0, 0, 0, 0];

  const 거리두었니 = (대기실, index) => {
    let flag = true;
    for (let i = 0; i < 대기실.length && flag; i++) {
      for (let j = 0; j < 대기실.length && flag; j++) {
        // 마지막까지 문제 없으면 이 대기실 OK
        if (i === 4 && j === 4) {
          answer[index] = 1;
          break;
        }
        // 1. P인지 확인한다.
        if (대기실[i][j] === "P") {
          // 2. P의 상하좌우 +1 칸을 살핀다
          //      => P가 있으면 break
          if (대기실[i - 1] && 대기실[i - 1][j] === "P") flag = false;
          if (대기실[i + 1] && 대기실[i + 1][j] === "P") flag = false;
          if (대기실[j - 1] && 대기실[i][j - 1] === "P") flag = false;
          if (대기실[j + 1] && 대기실[i][j + 1] === "P") flag = false;
          // 3. P의 상하좌우 +2 칸을 살핀다
          //      => P가 있으면 해당 방향으로 P기준 +1칸에 X가 있는지 살핀다
          //        => X가 없으면 break
          if (대기실[i - 2] && 대기실[i - 2][j] === "P" && 대기실[i - 1][j] !== "X") flag = false;
          if (대기실[i + 2] && 대기실[i + 2][j] === "P" && 대기실[i + 1][j] !== "X") flag = false;
          if (대기실[j - 2] && 대기실[i][j - 2] === "P" && 대기실[i][j - 1] !== "X") flag = false;
          if (대기실[j + 2] && 대기실[i][j + 2] === "P" && 대기실[i][j + 1] !== "X") flag = false;
          // 4. P의 대각선 네 방향 칸을 살핀다
          //      => P가 있으면 대각선의 양방향에 하나라도 X가 없는지 살핀다
          //        => X가 없으면 break
          if (대기실[i - 1] && 대기실[j - 1] && 대기실[i - 1][j - 1] === "P" && (대기실[i - 1][j] !== "X" || 대기실[i][j - 1] !== "X")) flag = false;
          if (대기실[i + 1] && 대기실[j + 1] && 대기실[i + 1][j + 1] === "P" && (대기실[i + 1][j] !== "X" || 대기실[i][j + 1] !== "X")) flag = false;
          if (대기실[i - 1] && 대기실[j + 1] && 대기실[i - 1][j + 1] === "P" && (대기실[i - 1][j] !== "X" || 대기실[i][j + 1] !== "X")) flag = false;
          if (대기실[i + 1] && 대기실[j - 1] && 대기실[i + 1][j - 1] === "P" && (대기실[i + 1][j] !== "X" || 대기실[i][j - 1] !== "X")) flag = false;
        }
      }
    }
  };

  places.forEach((place, index) => 거리두었니(place, index));

  console.log(answer);
  return answer;
}

// 1. P를 찾는다
// 2. P의 상하좌우 +1 칸을 살핀다
//      => P가 있으면 0
// 3. P의 상하좌우 +2 칸을 살핀다
//      P가 있으면 해당 방향 P 기준 +1칸에 X가 있는지 살핀다
//      => X가 없으면 0
// 4. P의 대각선 네 방향 칸을 살핀다
//      => P가 있으면 대각선 양방향에 X가 있는지 살핀다
//      => X가 없으면 0

solution([
  ["PXPXP", "XPXPX", "PXPXP", "XPXXX", "PXXOP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
]);
