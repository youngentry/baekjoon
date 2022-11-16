function solution(board) {
    let z = board;
    let size = board.length;

    const makeDangerZone = (i, j) => {
        z[i][j]--;
    };

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (z[i][j] === 1) {
                if (i !== 0 && j !== 0 && z[i - 1][j - 1] !== 1) makeDangerZone(i - 1, j - 1);
                if (i !== 0 && z[i - 1][j] !== 1) makeDangerZone(i - 1, j);
                if (i !== 0 && j !== size - 1 && z[i - 1][j + 1] !== 1) makeDangerZone(i - 1, j + 1);
                if (j !== 0 && z[i][j - 1] !== 1) makeDangerZone(i, j - 1);
                if (j !== size - 1 && z[i][j + 1] !== 1) makeDangerZone(i, j + 1);
                if (i !== size - 1 && j !== 0 && z[i + 1][j - 1] !== 1) makeDangerZone(i + 1, j - 1);
                if (i !== size - 1 && z[i + 1][j] !== 1) makeDangerZone(i + 1, j);
                if (i !== size - 1 && j !== size - 1 && z[i + 1][j + 1] !== 1) makeDangerZone(i + 1, j + 1);
            }
        }
    }
    let count = 0;
    z.map((el1) => (count += el1.filter((el2) => el2 === 0).length));
}

solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
]);
