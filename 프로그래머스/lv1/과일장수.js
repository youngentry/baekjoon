// 1. 조건 정리
// 사과는 상태에 따라 1점부터 k점까지의 점수로 분류
// k점이 최상품의 사과
// p점이 최하품의 사과
// 한 상자에 m개 포장
// 사과 한 상자의 가격은 p * m
// 최대 이익을 계산 (사과는 상자 단위로만 판매, 남는 사과는 버립니다)

// 2. 풀이 단계 정리
// (1)고렴이 > 저렴이 순서로 배치하기
// (2)앞에서부터 m개씩( 가장 저렴한 사과끼리 ) 나누어 상자에 담기
// (3)상자의 마지막 사과(p) * 사과갯수(m)을 가격에 더하기
// (4)마지막 상자에 3개보다 사과가 덜 담긴다면 총 가격을 구하기

// 3. 코드로 옮기기

function solution(k, m, score) {
  // (1)고렴이 > 저렴이 순서로 배치하기
  const 고렴이우선배열 = score.sort((a, b) => b - a);
  //   console.log 찍어서 잘 나타나는지 확인하기
  //   console.log(고렴이우선배열);
  //   [
  //     4, 4, 4, 4, 4,
  //     4, 2, 2, 2, 2,
  //     1, 1
  //   ]

  let box = [];
  let money = 0;

  console.log(score);

  for (let i = 0; i < score.length; i++) {
    // (2)앞에서부터 m개씩( 가장 저렴한 사과끼리 ) 나누어 상자에 담기
    box.push(score[i]);
    // 사과 m개를 상자에 담았으면
    if (box.length === m) {
      // (3)상자의 마지막 사과(p) * 사과갯수(m)을 가격에 더하기
      money += box[m - 1] * m;
      //   박스 console.log 찍어서 잘 나타나는지 확인하기
      //   console.log(box);
      // [ 4, 4, 4 ]
      // [ 4, 4, 4 ]
      // [ 2, 2, 2 ]
      // [ 2, 1, 1 ]
      // 다음 상자 가져오기
      box = [];
    }
  }
  // (4)마지막 상자에 3개보다 사과가 덜 담긴다면 총 가격을 구하기
  //   console.log(money);
  return money;
}

solution(3, 4, [1, 2, 3, 1, 2, 3, 1]);
