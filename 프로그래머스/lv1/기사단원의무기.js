// 각 기사에게는 1번부터 number까지 번호가 지정
// 자신의 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기를 구매
// 제한수치보다 큰 공격력을 가진 무기를 구매해야 하는 기사는 협약기관에서 정한 공격력을 가지는 무기를 구매
// 무기를 만들 때, 무기의 공격력 1당 1kg의 철이 필요
// 무기를 모두 만들기 위해 필요한 철의 무게를 미리 계산

// 1~n까지의 숫자별 약수 개수 배열 만들기
// 약수 개수는 제한 수치까지만 적용하기
// 합을 반환하기

function solution(number, limit, power) {
  const weaponCount = [];
  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j * j <= i; j++) {
      if (j * j === i) {
        count++;
      } else if (i % j === 0) {
        count += 2;
      }
    }
    if (count > limit) {
      weaponCount.push(power);
      continue;
    }
    weaponCount.push(count);
  }

  console.log(weaponCount);
  return weaponCount.reduce((a, b) => a + b);
}

solution(10, 3, 2);
