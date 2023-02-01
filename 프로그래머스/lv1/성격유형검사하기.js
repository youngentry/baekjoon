function solution(survey, choices) {
  const score = {
    1: -3,
    2: -2,
    3: -1,
    4: 0,
    5: 1,
    6: 2,
    7: 3,
  };

  const result = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  choices.forEach((nth, index) => {
    if (nth < 4) {
      result[survey[index][0]] -= score[nth];
    } else {
      result[survey[index][1]] += score[nth];
    }
  });

  const resultArray = Object.entries(result);
  console.log(Object.entries(result));

  let answer = "";

  for (let i = 0; i < 8; i += 2) {
    const isFormerTypeBig = resultArray[i][1] >= resultArray[i + 1][1];
    console.log(resultArray[i], resultArray[i + 1]);
    if (isFormerTypeBig) {
      answer += resultArray[i][0];
    } else {
      answer += resultArray[i + 1][0];
    }
  }

  console.log(answer);
  return answer;
}

solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]);

// 지표 번호	성격 유형
// 1번 지표	라이언형(R), 튜브형(T)
// 2번 지표	콘형(C), 프로도형(F)
// 3번 지표	제이지형(J), 무지형(M)
// 4번 지표	어피치형(A), 네오형(N)

// 검사지에는 총 n개의 질문이 있고, 각 질문에는 아래와 같은 7개의 선택지가 있습니다.

// 1 매우 비동의
// 2 비동의
// 3 약간 비동의
// 4 모르겠음
// 5 약간 동의
// 6 동의
// 7 매우 동의

// 검사 결과는 모든 질문의 성격 유형 점수를 더하여 각 지표에서
// 더 높은 점수를 받은 성격 유형이 검사자의 성격 유형이라고 판단합니다.
// 단, 하나의 지표에서 각 성격 유형 점수가 같으면,
// 두 성격 유형 중 사전 순으로 빠른 성격 유형을 검사자의 성격 유형이라고 판단합니다.

// survey의 원소는 "RT", "TR", "FC", "CF", "MJ", "JM", "AN", "NA" 중 하나입니다.

// survey[i]의 첫 번째 캐릭터는 i+1번 질문의 비동의 관련 선택지를 선택하면 받는 성격 유형을 의미합니다.
// survey[i]의 두 번째 캐릭터는 i+1번 질문의 동의 관련 선택지를 선택하면 받는 성격 유형을 의미합니다.
