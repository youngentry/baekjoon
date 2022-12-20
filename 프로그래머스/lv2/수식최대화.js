function solution(expression) {
    let numbers = "";
    let operators = "";

    // 숫자 배열과 연산자 배열 나누기
    // => [ '100', '200', '300', '500', '20' ], [ '-', '*', '-', '+' ]
    expression.split("").forEach((el) => {
        if (isNaN(el)) {
            operators += el;
            numbers += ",";
        } else {
            numbers += el;
        }
    });

    const expressionArray = [numbers.split(","), operators.split("")];

    // 특정 연산자에 대한 연산 시행하기
    const operate = (operator, numberArray, operatorArray) => {
        const tempNumberArray = [...numberArray];
        const tempOperatorArray = [...operatorArray];

        let flag = true;
        while (flag) {
            // 특정 연산자의 인덱스를 찾는다.
            // => [ '-', '*', '-', '+' ] -를 찾으면 0 반환, +를 찾으면 3반환
            const currentOperatorIndex = tempOperatorArray.indexOf(operator);
            // 특정 연산자가 존재하지 않으면 반복을 멈춘다.
            if (currentOperatorIndex === -1) {
                flag = false;
                continue;
            }
            // eval() 함수로 특정 연산자의 인덱스, 연산, 특정 연산자의 인덱스 +1 를 계산한다.
            // [ '100', '200', '300', '500', '20' ], [ '-', '*', '-', '+' ]
            // => 100 - 200
            const value = eval(tempNumberArray[currentOperatorIndex] + operator + tempNumberArray[currentOperatorIndex + 1]);
            // 계산에 사용된 두 숫자는 하나의 계산 결과로 바꾸고,
            // 계산에 사용된 연산자는 제거한다.
            // => [ -100, '300', '500', '20' ], [ '*', '-', '+' ]
            tempNumberArray.splice(currentOperatorIndex, 2, value);
            tempOperatorArray.splice(currentOperatorIndex, 1);
        }

        // 특정 연산자가 존재하지 않을 때까지 시행한 결과 배열을 반환한다.
        // => [[ -60420 ] []]
        return [tempNumberArray, tempOperatorArray];
    };

    // 최대 6가지 이므로 직접 배열을 써 넣는게 빠르지만
    // 확장성을 고려해 다른 연산자가 추가될 수 있도록 연산자 배열에 대해 조합을 생성한다.
    // =>[[ '*', '+', '-' ],
    //    [ '*', '-', '+' ],
    //    [ '+', '*', '-' ],
    //    [ '+', '-', '*' ],
    //    [ '-', '+', '*' ],
    //    [ '-', '*', '+' ]]
    const 연산자배열 = ["*", "+", "-"];
    const 연산자조합 = [];
    const permutation = (i, array) => {
        const tempArray = [...array];
        if (i === 2) {
            return 연산자조합.push(tempArray);
        }
        for (let j = i; j < tempArray.length; j++) {
            [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
            permutation(i + 1, tempArray);
            [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
        }
    };
    permutation(0, 연산자배열);

    // 계산이 진행되는 과정을 담을 배열을 생성한다.
    let currentArray = [...expressionArray];
    const answer = [];

    // 연산자조합에 대해 모두 시행한다.
    연산자조합.forEach((el) => {
        // 각각의 연산자에 대해 시행한다.
        el.forEach((operator) => {
            const tempArray = operate(operator, currentArray[0], currentArray[1]);
            // 진행 과정을 저장한다.
            // => [ -100, '300', '500', '20' ], [ '*', '-', '+' ]
            currentArray = tempArray;
        });
        // 모든 연산자에 대해 수행한 결과를 담는다
        // => [[ -60420 ] []]
        answer.push(currentArray);
        // 원본 배열 형태로 복원한다.
        // => [ '100', '200', '300', '500', '20' ], [ '-', '*', '-', '+' ]
        currentArray = [...expressionArray];
    });

    console.log(Math.max(...answer.flat(2).map((el) => Math.abs(el))));
    // 절댓값으로 변환한 결과 중 가장 큰 수를 반환한다.
    // => [ 60420, 60380, 60420, 22000, 18000, 20020 ] 여기에 max()
    return Math.max(...answer.flat(2).map((el) => Math.abs(el)));
}

solution("100-200*300-500+20");
