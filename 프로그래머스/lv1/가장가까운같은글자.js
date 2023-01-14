// 처음 나왔다면 answer 배열에 -1 추가
// 처음 나온 문자와 문자의 index를 alphabet Map에 추가 => {b:0}
// 처음 나온 문자가 아니라면 answer에 현재 index - alphabet Map에 있는 해당 문자의 인덱스를 추가
// alphabet Map의 index를 현재 index로 업데이트

function solution(s) {
  var answer = [];
  const alphabet = {};

  s.split("").forEach((el, index) => {
    if (!Object.keys(alphabet).includes(el)) {
      answer.push(-1);
      alphabet[el] = index;
    } else {
      answer.push(index - alphabet[el]);
      alphabet[el] = index;
    }
  });

  console.log(answer);
  return answer;
}

solution("banana");
