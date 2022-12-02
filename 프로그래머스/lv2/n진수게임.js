function solution(n, t, m, p) {
    const result = [];
    let n진수변환 = "";
    let count = 0;

    while (count <= t * m) {
        n진수변환 += count.toString(n);
        count++;
    }

    for (let i = p - 1; i < t * m; i += m) {
        result.push(n진수변환.split("")[i].toUpperCase());
    }

    console.log(result.slice(0, t).join(""));
    return result.slice(0, t).join("");
}

solution(16, 1000, 100, 100);
