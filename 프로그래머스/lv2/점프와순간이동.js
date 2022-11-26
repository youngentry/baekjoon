function solution(n) {
    let battery = 0;

    while (n > 0) {
        // 순간이동: 현재까지 온 거리 x2
        if (n % 2 === 0) {
            n = n / 2;
            continue; // 배터리 소모 없음
        }
        // 점프: K칸을 점프하면 건전지가 사용됨
        if (n % 2 === 1) {
            n = n - 1;
            battery++; // 점프하면 배터리를 사용함
        }
    }
    return battery;
}

console.log(solution(5000));
