function solution(clothes) {
    const part = [];
    for (let i = 0; i < clothes.length; i++) {
        if (!part.includes(clothes[i][1])) {
            part.push(clothes[i][1]);
        }
    }
    console.log(part);

    const countEachPart = [];

    for (let i = 0; i < part.length; i++) {
        let countPart = 0;
        for (let j = 0; j < clothes.length; j++) {
            console.log(part[i], clothes[j][1]);
            if (part[i] === clothes[j][1]) {
                countPart++;
            }
        }
        countEachPart.push(countPart);
    }

    console.log(countEachPart);

    let result = 1;

    for (let i = 0; i < countEachPart.length; i++) {
        result *= 1 + countEachPart[i];
    }

    console.log(result - 1);
    return result - 1;
}

solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
]);

// 조합
// https://school.programmers.co.kr/questions/33347

// 만약에 옷의 종류가 1개라고 해봅시다. 개수는 a개입니다.
// 그럼 총 a가지의 경우가 있겠죠?

// 종류가 2개가 되고 각각의 옷의 개수는 a, b개입니다.
// 그럼 경우의 수는 a, b, ab가 되므로 조합의 개수는 (a+b) + (ab)가지입니다.

// 3개가 된다면? (a+b+c) + (ab+bc+ca) + (abc)가지입니다.

// 어디서 많이 보시지 않았나요? 학창시절에 우리는 다항식을 배우는데 위의 가짓수는 n차식(n = 옷의 종류의 개수) 계수들의 합입니다.

// 즉 옷의 종류가 3가지고 각각의 옷의 개수가 a, b, c라면 (x+a)(x+b)(x+c) = x3 + (a+b+c)x2 + (ab+bc+ca)x + (abc)라는 식이 정립됩니다. 보이시죠? 총 조합의 개수가 계수에 다 포함되어 있습니다.

// 해당 식의 계수의 합을 구하려면 x=1을 대입해주면 됩니다. 그 후 맨 앞 x3 의 계수는 정답에 포함되지 않으므로 마지막에 1을 빼주는 겁니다.
// x=1을 대입한 식은 (1+a)(1+b)(1+c)가 되고 그 값에 1을 뺀 후 리턴해주면 정답이 나오는 이유가 그것입니다.
