function solution(msg) {
    const alphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const indexObject = new Object();
    alphabetArray.forEach((alphabet, forIndex) => {
        indexObject[alphabet] = forIndex + 1;
    });

    const indexArray = [];
    let progress = 0;

    const zip = (현재입력, 다음글자) => {
        // 종료조건: 다음글자가 없을 때 종료해
        if (다음글자 === undefined) {
            indexArray.push(indexObject[현재입력]);
            return;
        }

        // 일 한 번에 진행도를 1씩 올릴거야
        progress++;
        const 합친글자 = 현재입력 + 다음글자;
        const 합친글자있냐 = indexObject[합친글자] !== undefined;

        // 할일: 현재입력과 다음글자를 합친글자가 indexObject에 있는지 확인해.
        if (합친글자있냐) {
            //  => 있으면: 합친글자랑 다음 글자가 indexObject에 있는지 확인하는걸 게속해
            zip(합친글자, msg[progress + 1]);
        } else {
            //  => 없으면: indexObject의 마지막에 합친글자를 추가, indexArray에 현재입력의 index를 추가, 그리고 다음 글자를 살펴
            indexObject[합친글자] = Object.keys(indexObject).length + 1;
            indexArray.push(indexObject[합친글자.slice(0, -1)]);
            zip(msg[progress], msg[progress + 1]);
        }
    };
    zip(msg[progress], msg[progress + 1]);
    return indexArray;
}

solution("KAKAO");
