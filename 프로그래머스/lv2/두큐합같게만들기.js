function solution(q1, q2) {
  let [sumQ1, sumQ2] = [q1.reduce((a, b) => a + b), q2.reduce((a, b) => a + b)];
  const halfTotal = (sumQ1 + sumQ2) / 2;

  let [count, maxCount] = [0, q1.length * 2 + 1];
  let [q1Index, q2Index] = [0, 0];

  const q1Toq2 = () => {
    sumQ2 += q1[q1Index];
    sumQ1 -= q1[q1Index];
    q2.push(q1[q1Index]);
    q1Index++;
  };
  const q2Toq1 = () => {
    sumQ1 += q2[q2Index];
    sumQ2 -= q2[q2Index];
    q1.push(q2[q2Index]);
    q2Index++;
  };

  while (sumQ1 !== halfTotal) {
    if (count > maxCount) {
      count = -1;
      break;
    }
    count++;

    if (sumQ1 > halfTotal) {
      q1Toq2();
      continue;
    }
    q2Toq1();
  }

  return count;
}

solution([3, 2, 7, 2], [4, 6, 5, 1]);
