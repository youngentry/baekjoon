function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;

    let player = [[0, 0, 0]];

    const command = [
        [0, -1],
        [0, 1],
        [-1, 0],
        [1, 0],
    ];
    maps[0][0] = 0;

    while (player.length > 0) {
        // 현재 x좌표, y좌표, 움직임 횟수
        const [x, y, moveCount] = player.shift();

        // 출구(n-1,m-1)에 도달하면 게임 승리
        if (x === n - 1 && y === m - 1) {
            return moveCount + 1;
        }

        // 상하좌우 움직임 저장
        command.forEach((move) => {
            // 현재 x,y좌표 + 움직일 x,y좌표
            const xMove = x + move[0];
            const yMove = y + move[1];
            // 미로 경계 안에서
            if (xMove >= 0 && yMove >= 0 && xMove < n && yMove < m) {
                // 이동 가능한 지역이라면
                if (maps[xMove][yMove] === 1) {
                    // 이동을 하고 지나간 자리에는 흔적을 남김
                    maps[xMove][yMove] = 0;
                    // 이동한 x,y좌표 저장, 움직임 횟수 +1
                    player.push([xMove, yMove, moveCount + 1]);
                }
            }
        });

        // 플레이어가 모든 움직임을 수행하여도 도달할 수 없다면 막힌 미로
        if (player.length === 0) {
            return -1;
        }
    }
}
// 주변칸 중에 1 찾기
// 더이상 이동할 수 없을 때까지 or n-1,m-1에 도달할 때까지 이동하기
// ㄴ이동할 좌표 0으로 바꾸기
// ㄴ해당 칸으로 player 이동하기
// 목표: 1,1 에서 n-1,m-1 으로 가기

solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
]);
