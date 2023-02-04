function solution(s, skip, index) {
  //   스킵할 코드 배열 => [ 119, 98, 113, 100 ]
  const skipArray = [...skip.split("").map((alphabet) => alphabet.charCodeAt())];
  //   console.log(skipArray, "skipArray");

  //   스킵된 코드 배열
  const asciiArray = new Array(26).fill(0).map((el, index) => el + 97 + index);
  const skippedAsciiArray = asciiArray.filter((el) => !skipArray.includes(el));
  //   console.log(skippedAsciiArray, "skippedAsciiArray");

  // 알파벳을 충분한 길이만큼 반복
  const skippedAlphabetArray = skippedAsciiArray
    .map((ascii) => String.fromCharCode(ascii))
    .join("")
    .repeat(3);
  console.log(skippedAlphabetArray, "skippedAlphabetArray");

  // indexOf를 이용하여 인덱스만큼 이동한 문자를 합쳐서 반환
  const answer = [];
  s.split("").forEach((alphabet) => answer.push(skippedAlphabetArray[skippedAlphabetArray.indexOf(alphabet) + index]));
  return answer.join("");
}
solution("aukks", "wbqd", 5);
// abcdefhijklmnopqrstuvwxyz
// uvwxyz
//   "

// 두 문자열 s와 skip, 그리고 자연수 index가 주어질 때, 다음 규칙에 따라 문자열을 만들려 합니다.

// 문자열 s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꿔줍니다.
// index만큼의 뒤의 알파벳이 z를 넘어갈 경우 다시 a로 돌아갑니다.
// skip에 있는 알파벳은 제외하고 건너뜁니다.

// a   efge
//  bcd
