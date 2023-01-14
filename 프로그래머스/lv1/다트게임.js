function solution(dartResult) {
  const result = [];
  let score = "";

  const alphabet = {
    S: "**1",
    D: "**2",
    T: "**3",
  };

  // 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
  for (let i = 0; i < dartResult.length; i++) {
    // 숫자라면 숫자를 score에 문자열로 더하기 => score = "1"
    if (dartResult[i] * 0 < 1) {
      score += dartResult[i];
    }
    // S라면 **1, D라면, **2 T라면 **3 score에 문자열로 더하기 => score = "1**1"
    if (Object.keys(alphabet).includes(dartResult[i])) {
      score += alphabet[dartResult[i]];
    }
    // 수식을 계산한 값을 배열에 추가  1**1 = 1 => result = [1]
    if (score.length >= 4) {
      result.push(eval(score));
      score = "";
    }
    // "#"이나 "*"는 그대로 추가
    if (dartResult[i] === "#") {
      result.push("#");
    }
    if (dartResult[i] === "*") {
      result.push("*");
    }
  }
  //   => [ 1, 4, '*', 27 ]

  // 옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
  result.forEach((el, index) => {
    // 배열을 순회하며 "*"이 있다면 이전의 값과 현재의 값에 각각 *2 를 해준다.
    if (el === "*") {
      if (result[index - 2]) {
        result[index - 2] *= 2;
      }
      result[index - 1] *= 2;
      // "*"을 배열에서 제거한다
      result.splice(index, 1);
    }
    // 배열을 순회하며 "#"이 있다면 현재의 값에 각각 *-1 을 해준다.
    if (el === "#") {
      result[index - 1] *= -1;
      // "#"을 배열에서 제거한다
      result.splice(index, 1);
    }
  });
  //   => [ 2, 8, 27 ]

  return result.reduce((a, b) => a + b); // => 37
}

solution("1S2D*3T");
