function solution(k, score) {
  var answer = [];

  for (let i = 0; i < score.length; i++) {
    // 배열 n일차 까지의 점수를 내림차순한 배열에 대해
    const dayNScore = score.slice(0, i + 1).sort((a, b) => b - a);
    // 배열 길이가 K보다 작을 경우
    dayNScore.length <= k
      ? // ? 가장 마지막 점수를 answer에 추가
        answer.push(dayNScore[dayNScore.length - 1])
      : // : K번째 점수를 answer에 추가
        answer.push(dayNScore[k - 1]);
  }

  return answer;
}
