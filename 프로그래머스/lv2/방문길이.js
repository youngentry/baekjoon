function solution(dirs) {
    const dirsArray = dirs.split("");
    const dirObject = {
        U: [0, +1],
        D: [0, -1],
        L: [-1, 0],
        R: [+1, 0],
    };

    const player = [0, 0];
    const moveHistorySet = new Set();

    const move = (direction) => {
        const trace = [direction[0] / 2, direction[1] / 2];
        direction.forEach((el, index) => {
            if (player[index] + el >= -5 && player[index] + el <= 5) {
                player[index] += el;
            }
        });
        console.log(player);
        if (!moveHistorySet.has(`${[player[0] - trace[0], player[1] - trace[1]]}`)) {
            moveHistorySet.add(`${[player[0] - trace[0], player[1] - trace[1]]}`, 0);
        }
    };

    dirsArray.forEach((el) => {
        move(dirObject[el]);
    });

    console.log(moveHistorySet);
    console.log(moveHistorySet.size);

    return moveHistorySet.size;
}

solution("LDLDLDLDLDLDLDLDLD");
