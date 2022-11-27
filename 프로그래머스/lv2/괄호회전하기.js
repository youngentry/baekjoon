function solution(s) {
    let stack = [];
    let answer = 0;

    const bracket = {
        "]": "[",
        ")": "(",
        "}": "{",
    };

    const checkBrackets = () => {
        for (let i = 0; i < s.length; i++) {
            if (Object.values(bracket).includes(s[i])) {
                stack.push(s[i]);
                continue;
            }
            if (stack.length === 0) {
                stack.push(s[i]);
                return;
            }
            if (stack[[stack.length - 1]] === bracket[s[i]]) {
                stack.pop();
            }
        }
    };

    const setAnswer = () => {
        if (stack.length === 0) {
            answer++;
        }
    };

    const rotateS = () => {
        const first = s[0];
        let slicedS = s.slice(1);
        slicedS += first;
        return slicedS;
    };

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
