function solution(cards1, cards2, goal) {
  let cards1Index = 0;
  let cards2Index = 0;
  for (word of goal) {
    if (word === cards1[cards1Index]) {
      cards1Index++;
      continue;
    }
    if (word === cards2[cards2Index]) {
      cards2Index++;
      continue;
    }
  }
  if (cards1Index + cards2Index === goal.length) {
    return "Yes";
  }
  return "No";
}
