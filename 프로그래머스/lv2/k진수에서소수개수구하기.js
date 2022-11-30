function solution(n, k) {
    const kNumberArray = n
        .toString(k)
        .split("0")
        .filter((el) => el !== "");
    console.log(kNumberArray);

    const findPrime = (number) => {
        if (number === 2) return true;
        if (number % 2 === 0 || number === 1) return false;

        for (let i = 3; i * i <= number; i += 2) {
            if (number % i === 0) return false;
        }
        return true;
    };

    const result = kNumberArray.filter((el) => findPrime(parseInt(el))).length;

    console.log(result);
    return result;
}

solution(437674, 3);
solution(110011, 10);
solution(6050403, 9);
solution(9, 10);
