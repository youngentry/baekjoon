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

        if (Math.abs(player[0] + direction[0]) <= 5 && Math.abs(player[1] + direction[1]) <= 5) {
            if (!moveHistorySet.has(`${[player[0] + trace[0], player[1] + trace[1]]}`)) {
                moveHistorySet.add(`${[player[0] + trace[0], player[1] + trace[1]]}`, null);
            }
            player[0] += direction[0];
            player[1] += direction[1];
        }
    };

    dirsArray.forEach((el) => {
        move(dirObject[el]);
    });

    return moveHistorySet.size;
}

solution("LLLLLDDDDDLL"); //10이어야 하는데 11
// solution("RRRRRDDDDDR"); //10이어야 하는데 11
