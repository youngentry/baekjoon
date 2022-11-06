function solution(n) {
    let n1 = n + 1;

    while (
        n
            .toString(2)
            .split("")
            .filter((el) => el == 1).length !==
        n1
            .toString(2)
            .split("")
            .filter((el) => el == 1).length
    ) {
        n1++;
    }
    return n1;
}

// 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다. => 최소한 1이상 크게 만듭니다.
//     let n1 = n+1
// 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다. => 2진수로 변환한 뒤에 1을 걸러낸 배열의 길이를 비교합니다.
//     n.toString(2).split("").filter(el=> el == 1).length
// 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
//     while 반복문을 통해 n1의 수를 1씩 크게 만들며 조건2와 일치할 때까지 계속 실행합니다.
