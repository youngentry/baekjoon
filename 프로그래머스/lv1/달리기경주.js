function solution(players, callings) {
  const playerObject = {};

  const playerIndex = players.map((player, index) => {
    playerObject[player] = index;
    return [player, index];
  });

  for (const call of callings) {
    // 추월하기 전의 상태를 저장
    const forward = playerIndex[playerObject[call] - 1];
    const behind = playerIndex[playerObject[call]];

    // 추월한 뒤의 상태로 업데이트
    playerIndex[playerObject[call] - 1] = behind;
    playerIndex[playerObject[call]] = forward;
    playerObject[forward[0]] += 1;
    playerObject[behind[0]] -= 1;
  }

  // 결과를 정렬한 뒤 이름 배열을 반환
  const sortedPlayers = Object.entries(playerObject).sort((a, b) => a[1] - b[1]);
  return sortedPlayers.map((playerIndex) => playerIndex[0]);
}
