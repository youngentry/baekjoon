function solution(t, p) {
  let answer = 0;
  for (let i = 0; i < t.length - p.length + 1; i++) {
    if (t.slice(i, i + p.length) <= p) answer++;
    console.log(t.slice(i, i + p.length));
  }
  console.log(answer);
  return answer;
}
solution("1000000", "150");
