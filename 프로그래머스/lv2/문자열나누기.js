function solution(s) {
  let answer = 0;
  let [xCount, yCount] = [0, 0];

  // 첫 글자 b를 x라고 할 때
  let x = s[0];

  for (let i = 0; i < s.length; i++) {
    // 연속되는 x의 횟수 카운트, x가 아닌 글자의 횟수 카운트
    x === s[i] ? xCount++ : yCount++;

    // 두 횟수가 같은 지점에서 분리
    if (xCount === yCount) {
      answer++;
      xCount = 0;
      yCount = 0;
      x = s[i + 1];
      continue;
    }
    // 횟수 다른 상태로 읽을 긁자 없으면 분리하고 종료
    if (i === s.length - 1) answer++;
  }

  console.log(Math.sqrt(0));
  return answer;
}

solution("aaabbaccccabba");
// 첫 글자 b를 x라고 할 때
// 연속되는 x의 횟수 카운트
// x가 아닌 글자의 횟수 카운트
// 두 횟수가 같은 지점에서 분리
// 남은 부분이 없을 때까지 같은 과정 반복하고 종료
// 횟수 다른 상태로 읽을 긁자 없으면 분리하고 종료
