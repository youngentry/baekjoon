function solution(order) {
  const mainBelt = new Array((length = order.length))
    .fill()
    .map((_, index) => index + 1)
    .reverse();
  const sideBelt = [];
  const truck = [];
  let index = 0;

  while (true) {
    // 목표대상이 없으면 [메인벨트 => 보조벨트]
    if (mainBelt.at(-1) && sideBelt.at(-1) !== order[index] && mainBelt.at(-1) !== order[index]) {
      sideBelt.push(mainBelt.pop());
      continue;
    }
    // 목표대상이 메인벨트에 있으면 [메인벨트 => 트럭]
    if (mainBelt.at(-1) && mainBelt.at(-1) === order[index]) {
      truck.push(mainBelt.pop());
      index++;
      continue;
    }
    // 목표대상이 보조벨트에 있으면 [보조벨트 => 트럭]
    if (sideBelt.at(-1) && sideBelt.at(-1) === order[index]) {
      truck.push(sideBelt.pop());
      index++;
      continue;
    }
    // 보조 벨트 안에 목표대상이 들어 있으면 break
    if ((sideBelt.indexOf(order[index]) !== -1 && sideBelt.at(-1) !== order[index]) || truck.length === order.length) {
      break;
    }
  }
  return truck.length;
}

solution([4, 3, 1, 2, 5]);
