function solution(n, computers) {
  var answer = 0;
  let checkedComputersArray = Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (!checkedComputersArray[i]) {
      // i번째 computersArray확인
      const stack = [i];

      while (stack.length) {
        // 확인할 checkedComputersArray는 i번으로 지정
        const nthComputer = stack.pop();
        // 확인한 computersArray는 확인처리
        if (!checkedComputersArray[nthComputer]) {
          checkedComputersArray[nthComputer] = true;

          // 확인이 가능한 computersArray의 nthComputer가 방문가능한 computerArray 확인
          for (let j = 0; j < n; j++) {
            if (computers[nthComputer][j] && !checkedComputersArray[j]) {
              stack.push(j);
            }
          }
        }
      }
      answer++;
    }
  }
  return answer;
}

// 1,2,3,... 각각의 노드에서 이후의 번호에 대해 연결된 곳을 찾기
// 연결된 숫자들에 대해서는 재탐색을 하지 않음
// 이 뒤로 연결된 네트워크가 없을 경우에는 네트워크 카운트 +1
