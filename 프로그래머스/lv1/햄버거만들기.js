function solution(ingredient) {
  const ingredientStack = [];
  let burgerCount = 0;

  ingredient.forEach((element) => {
    ingredientStack.push(element);

    while (JSON.stringify(ingredientStack.slice(-4)) === JSON.stringify([1, 2, 3, 1])) {
      ingredientStack.splice(-4);
      burgerCount++;
    }
  });

  return burgerCount;
}
solution([2, 1, 1, 2, 3, 1, 2, 3, 1]);

// 문제 조건
// 다른 직원들이 햄버거에 들어갈 재료를 조리해 주면 조리된 순서대로 상수의 앞에 아래서부터 위로 쌓이게 되고
// 순서에 맞게 쌓여서 완성된 햄버거를 따로 옮겨 포장
// 정해진 순서(아래서부터, 빵 – 야채 – 고기 - 빵)로 쌓인 햄버거만 포장

// 풀이 과정
// 재료를 순서대로 쌓는다.
// 빵-야채-고기-빵 순서로 쌓여있다면 재료들을 가지고 햄버거를 쌓는다.
