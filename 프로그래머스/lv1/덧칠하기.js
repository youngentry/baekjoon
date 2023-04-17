function solution(n, m, section) {
  section.reverse();
  let count = 0;
  while (section.length) {
    const currentSwipe = section[section.length - 1] + m - 1;
    count++;
    while (section[section.length - 1] <= currentSwipe) {
      section.pop();
    }
  }

  return count;
}
console.log(solution(4, 1, [1, 2, 3, 4]));
// n미터인 벽
// 각 구역에 왼쪽부터 순서대로 1번부터 n번까지 번호
// 벽에 페인트를 칠하는 롤러의 길이는 m미터

// 롤러가 벽에서 벗어나면 안 됩니다.
// 구역의 일부분만 포함되도록 칠하면 안 됩니다.

// 페인트칠을 하는 횟수를 최소화

// 정수 n, m과 다시 페인트를 칠하기로 정한 구역들의 번호가 담긴 정수 배열 section
