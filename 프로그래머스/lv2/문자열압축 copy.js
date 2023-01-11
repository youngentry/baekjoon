function solution(s) {
  let tempS = s;
  let unit = 1;

  for (let j = 1; j < s.length / 2; j++) {
    for (let i = 0; i < s.length; i++) {
      // j개 단위로 자르기
      console.log(s.slice(i, i + j));
    }
  }
}

solution("accbcc");
