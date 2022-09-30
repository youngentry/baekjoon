function solution(answers) {
    let [a, b, c] = [[], [], []];
    let [aScore, bScore, cScore] = [0, 0, 0];

    let count = 0;
    let aNum = 1;
    let bNum = 2;

    while (count < answers.length) {
        if (aNum == 6) aNum = 1;
        a.push(aNum);
        aNum++;
        count++;
    }
    count = 0;
    let bArr = [1, 3, 4, 5];
    while (count < answers.length) {
        if (count % 2 == 0) {
            b.push(bNum);
        } else {
            b.push(bArr[Math.ceil((count % 8) / 2) - 1]);
        }
        count++;
    }

    console.log(a);
    console.log(b);
}

solution([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
// 1, 2, 3번 수포자의 배열을 만듭니다.
// 각 배열을 answers 배열의 요소와 비교해 일치하는 수 하나 당 1, 2, 3각각에 점수를 1씩 줍니다.
