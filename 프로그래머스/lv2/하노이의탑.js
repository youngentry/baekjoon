function solution(n) {
  const answer = [];
  const hanoi = (plate, start, via, end) => {
    // 1개라면 목적지로 옮겨라.
    if (plate === 1) {
      answer.push([start, end]);
      return;
    }
    // n-1개의 원반을 경유지로 옮겨야 한다.
    hanoi(plate - 1, start, end, via);
    // 그리고 시작 원반을 목적지로 옮긴다.
    answer.push([start, end]);
    // 이제 경유지에 있는 n-1개의 원반을 목적지로 옮겨야 한다.
    hanoi(plate - 1, via, start, end);
  };

  // n개의 원반을 목적지로 옮겨라
  hanoi(n, 1, 2, 3);

  return answer;
}

solution(3);
