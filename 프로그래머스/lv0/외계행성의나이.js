// a는 0, b는 1, c는 2, ..., j는 9입니다.
const alphabet = {
  2: "c",
  0: "a",
  6: "g",
  3: "d",
  1: "b",
  5: "f",
  4: "e",
  7: "h",
  8: "i",
  9: "j",
};

function solution(age) {
  let answer = "";
  const ageNumberArray = age.toString().split("");

  ageNumberArray.forEach((eachNum) => (answer += alphabet[eachNum]));

  return answer;
}
solution(100);
