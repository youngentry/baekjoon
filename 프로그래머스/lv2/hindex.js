function solution(citations) {
    let h회 = 0;

    citations.sort((a, b) => b - a);

    citations.forEach((el) => {
        if (el > h회) {
            h회++;
        }
    });

    console.log(h회);
    return h회;
}

solution([3, 0, 6, 1, 5]);
// h번 이상이 h편 이상인 가장 큰 수를 구하면 나머지는 h번 이하니까 무시해도 됨
// 즉 'h번 이상'이 'h편 이상'이 되는 가장 큰 수는
// 'h편 이상'이 h개보다 작거나 같으면 됨

// 예시
// 4,3,2,1,0
// 1편이상 - 4개 O
// 2편이상 - 3개 O => 2
// 3편이상 - 2개 X

// 5,4,3,3,2,1,0
// 1편이상 - 6개 O
// 2편이상 - 5개 O
// 3편이상 - 4개 O => 3
// 4편이상 - 2개 X

// 6,5,2,1,0
// 1편이상 - 4개 O
// 2편이상 - 3개 O => 2
// 3편이상 - 2개 X

// 100,5,4,3,2,1
// 1편이상 - 6개 O
// 2편이상 - 5개 O
// 3편이상 - 4개 O => 3
// 4편이상 - 3개 X
