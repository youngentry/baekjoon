function solution(orders, course) {
    const combination = (array, pick) => {
        const result = [];
        if (pick === 1) {
            // 아래의 [z]를 예시로 들면
            // [z] 가 반환이 되면서 fixedElement + ...smallCombinations 구조로 [y, z] 가 된다
            return array;
        }

        // 각 문자열에 대해서 [x, y, z]
        array.forEach((fixedElement, index, origin) => {
            // 뒷부분만을 골라냅니다 fix:x rest:[y, z] | fix:y rest:[z]
            const rest = origin.slice(index + 1);
            // 뒷부분에 대해서 combination을 실행합니다. [y, z] | [z] (위의 if문)
            const smallCombinations = combination(rest, pick - 1);
            // 앞부분과 뒷부분을 합칩니다. 앞[x], 뒤[y,z] => [x, y, z] | 앞[y], 뒤[z] [y, z]
            const combinations = smallCombinations.map((el) => [fixedElement, ...el]);
            // 합친 배열을 결과에 추가합니다.
            // z []로 시작한 것과 같이 빈 배열의 경우 spread 연산자로 인해 배열에 추가되지 않습니다.
            result.push(...combinations);
        });
        return result;
    };

    const answer = [];

    course.forEach((el) => {
        const combinationCount = {};

        orders.forEach((order) => {
            combination(order.split(""), el).map((el) => {
                const elToString = el.sort().join("");
                // 조합이 나타난 횟수를 카운트
                combinationCount[elToString] = combinationCount[elToString] + 1 || 1;
            });
        });
        // 배열로 만들 때 2회 이상 나타난 조합을 내림차순 정렬하기
        const tempArray = Object.entries(combinationCount)
            .filter((el) => el[1] >= 2)
            .sort((a, b) => b[1] - a[1]);
        // 가장 큰 수를 골라냄
        // 조합이 단독으로 {ABC:1}와 같이 존재할 경우 filter에서 걸러지므로 옵셔널 체이닝으로 undefined에 대하여는 실행하지 않음
        const greatestNumber = tempArray[0]?.[1];
        // 가장 큰 수를 가진 조합들을 추가
        answer.push(...tempArray.filter((el) => el[1] === greatestNumber));
    });
    // 제한사항에 따라 문자열 정렬하여 반환
    return answer.map((el) => el[0]).sort();
}

// solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]);
