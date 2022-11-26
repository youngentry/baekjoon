// 최대공약수 구하기:
const get최대공약수 = (a, b) => {
    if (b === 0) {
        return a;
    }
    return get최대공약수(b, a % b);
};

// 최소공배수 구하기:
const get최소공배수 = (a, b) => {
    return (a * b) / get최대공약수(a, b);
};

function solution(arr) {
    // 앞에서부터 순서대로 최소공배수 구하기
    console.log((최소공배수 = arr.reduce((a, b) => get최소공배수(a, b))));
    return (최소공배수 = arr.reduce((a, b) => get최소공배수(a, b)));
}

solution([2, 4, 6, 8]);
