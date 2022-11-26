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
    let 최소공배수 = arr[0];
    // 앞에서부터 순서대로 최소공배수 구하기
    for (let i = 1; i < arr.length; i++) {
        최소공배수 = get최소공배수(최소공배수, arr[i]);
    }
    return 최소공배수;
}
