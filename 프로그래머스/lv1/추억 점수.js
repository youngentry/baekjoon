function solution(name, yearning, photo) {
  const nameScoreMap = new Map();
  name.forEach((item, index) => nameScoreMap.set(item, yearning[index]));

  const answer = photo.map((item) => {
    return item.map((name) => (nameScoreMap.get(name) ? nameScoreMap.get(name) : 0)).reduce((total, current, index, array) => total + current);
  });

  return answer;
}

solution(
  ["may", "kein", "kain", "radi"],
  [5, 10, 1, 3],
  [
    ["may", "kein", "kain", "radi"],
    ["may", "kein", "brin", "deny"],
    ["kon", "kain", "may", "coni"],
  ]
);
