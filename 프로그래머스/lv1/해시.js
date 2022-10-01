function solution(participant, completion) {
    let hashed = [];
    participant.forEach((entry) => {
        hashed[entry] = hashed[entry] ? hashed[entry] + 1 : 1;
    });
    console.log(hashed);
    completion.forEach((entry) => {
        hashed[entry] = hashed[entry] - 1;
    });

    for (var key in hashed) {
        if (hashed[key] >= 1) return key;
    }
}

solution(["leo", "kiki", "eden"], ["eden", "kiki"]);

const a = "김";
const b = "이";
const c = "박";

let arr = [a, b, c];

arr[a] = arr[a] + 1;
arr[a] = arr[a] + 1;
arr[a] = arr[a] + 1;
console.log(arr);
