function solution(babbling) {
  let answer = 0;

  // 가능한 발음
  const word = ["aya", "ye", "woo", "ma"];

  // 발음이 가능한지 확인하고 싶은 단어들을 하나씩 확인한다.
  for (let i = 0; i < babbling.length; i++) {
    let babble = babbling[i];

    for (let j = 0; j < word.length; j++) {
      const eachWord = word[j];
      // 반복이 있다면 발음 불가능한 단어
      if (babble.includes(eachWord.repeat(2))) {
        break;
      }
      // 반복이 없다면 각각의 발음을 단어에서 제외
      babble = babble.split(eachWord).join(",");
    }
    // 모두 가능한 발음이라면 모두 제외되어 길이가 0이 된다.
    if (babble.replaceAll(",", "").length === 0) {
      answer++;
    }
  }
  return answer;
}
