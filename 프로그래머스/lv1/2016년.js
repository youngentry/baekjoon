const month = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
};

const days = {
    1: "FRI",
    2: "SAT",
    3: "SUN",
    4: "MON",
    5: "TUE",
    6: "WED",
    0: "THU",
};

function solution(a, b) {
    let count = b;

    for (i = 2; i <= a; i++) {
        count += month[i - 1];
    }
    console.log(count);
    console.log(days[count % 7], count % 7);
    return days[count % 7];
}

solution(1, 1);
solution(2, 1);
solution(3, 1);
solution(4, 1);
solution(5, 1);
solution(6, 1);
solution(7, 1);
solution(8, 1);
solution(9, 1);
solution(10, 1);
solution(11, 1);
solution(12, 1);
solution(12, 31);
