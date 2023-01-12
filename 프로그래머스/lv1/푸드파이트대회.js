function solution(food) {
  let foodOrder = [];

  for (let i = 1; i < food.length; i++) {
    foodOrder.push(i.toString().repeat(Math.floor(food[i] / 2)));
  }

  return foodOrder.join("") + "0" + foodOrder.reverse().join("");
}
