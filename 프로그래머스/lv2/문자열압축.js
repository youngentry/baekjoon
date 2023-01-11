function solution(s) {
  let result = s.length;

  for (let k = 1; k <= s.length / 2; k++) {
    let tempS = s;
    const words = [];
    for (let i = 0; i < tempS.length; i += k) {
      if (!words.includes(tempS.slice(i, i + k))) {
        words.push(tempS.slice(i, i + k));
      }
    }

    if (words[words.length - 1].length < k) {
      words.pop();
    }

    console.log(words);

    for (let i = 0; i < words.length; i++) {
      let count = 1;
      let index = tempS.indexOf(words[i].repeat(2));
      while (tempS.indexOf(words[i].repeat(2)) !== -1) {
        index = tempS.indexOf(words[i].repeat(2));
        count++;
        tempS = tempS.replace(words[i].repeat(2), words[i]);
        // console.log(tempS, "--------");
        if (count != 1) {
          tempS = tempS.slice(0, index) + count + words[i] + tempS.slice(index + k);
        }
      }
    }
    console.log(tempS, tempS.length);
    result = Math.min(result, tempS.length);
  }
  console.log(result);
  return result;
}

solution("accbcc");
