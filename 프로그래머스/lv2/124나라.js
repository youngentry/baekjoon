function solution(n) {
    const rule = [4, 1, 2];
    let answer = "";

    while (n > 0) {
        answer = rule[n % 3] + answer;
        n = Math.floor((n - 1) / 3);
    }
    console.log(answer);
    return answer;

    // for (let i = 0; i <= 250; i++) {
    //     if (i.toString(4).includes("0")) {
    //         continue;
    //     } else {
    //         if (count === n - 1) {
    //             return i
    //                 .toString(4)
    //                 .split("")
    //                 .map((el) => object124[el])
    //                 .join("");
    //             break;
    //         }
    //         count++;
    //     }
    // }
    // return quadArray[0];
}
solution(15);
