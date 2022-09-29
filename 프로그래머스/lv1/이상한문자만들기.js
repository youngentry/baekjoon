function solution(s) {
    const arr = s.split(" ");
    let answer = "";
    let arr2 = [];
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i].split(""));
        arr[i]
            .split("")
            .map((el, idx) =>
                idx % 2 == 0
                    ? (answer += el.toUpperCase())
                    : (answer += el.toLowerCase())
            );
        arr2.push(answer);
        answer = "";
    }
    console.log(arr2.join(" "));
    return arr2.join(" ");
}

solution("try hello world");
