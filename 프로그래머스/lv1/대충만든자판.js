function solution(keymap, targets) {
  var answer = Array(targets.length).fill(0);
  const keySave = {};

  // 키판을 순회하며 가장 빠르게 입력가능한 횟수를 저장
  for (let i = 0; i < keymap.length; i++) {
    const keySet = keymap[i];
    for (let j = 0; j < keySet.length; j++) {
      const currentKey = keySet[j];
      if (!keySave[currentKey] || keySave[currentKey] > j) {
        keySave[currentKey] = j + 1;
      }
    }
  }

  // keySave의 값을 이용하여 결과 출력
  for (let i = 0; i < targets.length; i++) {
    for (let j = 0; j < targets[i].length; j++) {
      if (!keySave[targets[i][j]]) {
        answer[i] = -1;
        break;
      }
      answer[i] += keySave[targets[i][j]];
    }
  }
  return answer;
}
