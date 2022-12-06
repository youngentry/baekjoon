function solution(numbers) {
    const prime = (number) => {
        if (number === 2) return true;
        if (number === 1 || number % 2 === 0) return false;
        for (let i = 3; i * i <= number; i += 2) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    };

    const numbersArray = [...numbers];
    const 찾은소수 = new Set();
    const permutation = (i, array, pick) => {
        // 배열의 크기가 pick이 될 때 종료
        if (i === pick) {
            if (prime(parseInt(array.slice(0, i).join("")))) {
                // slice(0,i)로 pick 개의 원소를 담은 조합 구하기
                찾은소수.add(parseInt(array.slice(0, i).join("")));
            }
            return;
        }
        for (let j = i; j < array.length; j++) {
            [array[i], array[j]] = [array[j], array[i]];
            permutation(i + 1, numbersArray, pick);
            [array[i], array[j]] = [array[j], array[i]];
        }
    };
    // 1개부터 numbers의 길이만큼을 고른 순열 조합 만들기
    for (let pick = 1; pick <= numbers.length; pick++) {
        permutation(0, numbersArray, pick);
    }
    console.log(찾은소수, "찾은소수", 찾은소수.size, "개");
    return 찾은소수.size;
}
solution("1231");
