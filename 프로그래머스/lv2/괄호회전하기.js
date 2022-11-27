function solution(s) {
    let stack = [];
    let answer = 0;

    const bracket = {
        "]": "[",
        ")": "(",
        "}": "{",
    };

    // 괄호 쌍 확인
    const checkBrackets = () => {
        for (let i = 0; i < s.length; i++) {
            // 여는 괄호 [,(,{ 중 하나라면 stack에 추가합니다.
            // 여는 괄호가 추가된 스택상태 ex) [ "[", "{", "(" ]
            if (Object.values(bracket).includes(s[i])) {
                stack.push(s[i]);
                continue;
            }
            // 여는 괄호는 continue로 넘어가므로 여기서는 닫는 괄호 중 하나가 옵니다.
            // stack의 길이가 0이라면 닫는 괄호가 먼저 온 것이므로 괄호 쌍이 맞지 않게 되어 더 이상 확인할 필요 없이 종료합니다.
            // 스택상태 ex) [ "]" ] => 종료
            if (stack.length === 0) {
                stack.push(s[i]);
                return;
            }
            // stack의 마지막 괄호와 닫는 괄호가 쌍을 이루면 마지막 괄호를 stack에서 제거합니다.
            // 스택상태 ex)  [ "[", "{", "(" ] => ")" 가 들어와서 쌍이 맞음 "("를 제거 =>  [ "[", "{" ]
            if (stack[[stack.length - 1]] === bracket[s[i]]) {
                stack.pop();
            }
        }
    };

    // 괄호가 비어있다면 올바른 쌍으로 이루어진 것이므로 answer에 1을 더합니다.
    const setAnswer = () => {
        if (stack.length === 0) {
            answer++;
        }
    };

    // 문제의 조건대로 왼쪽으로 한 칸 밀어줍니다.
    // 첫번째 문자를 마지막으로 보낸 형태를 만들면 됩니다.
    const rotateS = () => {
        const first = s[0];
        let slicedS = s.slice(1);
        slicedS += first;
        return slicedS;
    };

    // 왼쪽으로 한 칸 씩 문자열의 길이만큼 밀어주며 모든 경우를 실행한 결과를 반환합니다.
    for (let i = 0; i < s.length; i++) {
        checkBrackets();
        setAnswer();
        s = rotateS();
        stack = [];
    }

    console.log(answer);
    return answer;
}

solution("[](){}");
