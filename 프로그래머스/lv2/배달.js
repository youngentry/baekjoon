function solution(N, road, K) {
  const route = new Array(N + 1).fill().map((_) => []);
  const accumulate = new Array(N + 1).fill(500_000);

  road.forEach((el) => {
    route[el[0]].push({ 위치: el[1], 거리: el[2] });
    route[el[1]].push({ 위치: el[0], 거리: el[2] });
  });

  const queue = [{ 위치: 1, 거리: 0 }];
  accumulate[1] = 0;

  while (queue.length > 0) {
    const current = queue.pop();

    route[current.위치].forEach((next) => {
      if (accumulate[next.위치] > accumulate[current.위치] + next.거리) {
        accumulate[next.위치] = accumulate[current.위치] + next.거리;
        queue.push(next);
      }
    });
  }

  return accumulate.filter((el) => el <= K).length;
}
