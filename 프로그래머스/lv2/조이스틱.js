function solution(name) {
  // "A".charCodeAt() / String.fromCharCode(65) 65:A, 90:Z
  // 다음 알파벳 함수
  const nextAlphabet = (alphabet) => {
    if (alphabet.charCodeAt() + 1 === 91) {
      return "A";
    }
    return String.fromCharCode(alphabet.charCodeAt() + 1);
  };
  // 이전 알파벳 함수
  const previousAlphabet = (alphabet) => {
    if (alphabet.charCodeAt() - 1 === 64) {
      return "Z";
    }
    return String.fromCharCode(alphabet.charCodeAt() - 1);
  };

  let cursor = 0;
  let AAA = "A".repeat(name.length).split("");
  let count = 0;

  // A B A B A A A A A B A
  {
    // M:77, N:78
    // for문으로 i오른쪽으로 이동, j왼쪽으로 이동.
    // A가 아닌 녀석을 먼저 찾는 방향으로 cursor 이동
    // ABABAAAAABA <<< 왼쪽으로 먼저 갔다 와야 빠른 케이스가 해결 안됨.
    // DP로 가장 적은 경우를 찾아서 배열을 저장하고 cursor를 순서대로 바꾸어야 할 듯 함
    // for (let i = 0; i < name.length / 2; i++) {
    //   if (AAA[cursor + i] !== name[cursor + i]) {
    //     cursor = cursor + i;
    //     count += cursor - tempCursor;
    //     break;
    //   } else {
    //     if (cursor - i < 0) {
    //       if (AAA[cursor - i + name.length] !== name[cursor + i + name.length]) {
    //         cursor = cursor - i + name.length;
    //         count += tempCursor - cursor + name.length;
    //         break;
    //       }
    //     } else if (cursor - i >= 0) {
    //       if (AAA[cursor - i] !== name[cursor - i]) {
    //         cursor = cursor - i;
    //         count += tempCursor - cursor;
    //         break;
    //       }
    //     }
    //   }
    // }
  }
  // 아스키코드로 변한 값이 77과 같거나 작은지 아닌지 비교.
  // 변환이 적은 쪽으로 변환 반복

  let move = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    cursor = i + 1;

    while (cursor < name.length && name[cursor] == "A") {
      cursor++;
    }

    if (name[cursor].charCodeAt() <= 77) {
      console.log(name[cursor], AAA[cursor], cursor, count);
      for (let j = 0; j < name[cursor].charCodeAt() - 65; j++) {
        AAA[cursor] = nextAlphabet(AAA[cursor]);
        count++;
      }
    } else {
      console.log(name[cursor], AAA[cursor], cursor, count);
      for (let j = 0; j < 91 - name[cursor].charCodeAt(); j++) {
        AAA[cursor] = previousAlphabet(AAA[cursor]);
        count++;
      }
    }

    move = Math.min(move, i * 2 + name.length - cursor);
    move = Math.min(move, (name.length - cursor) * 2 + i);
  }
  console.log(count, AAA);
  return count + move;
}

solution("ABABAAAAAAABA");
