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
// 'h번 이상 인용'이 'h개 이상'인 가장 큰 수를 구하면 나머지는 h번 이하니까 무시해도 됨
// 즉 'h번 이상 인용'이 'h개 이상'이 되는 가장 큰 수는
// 'h번 이상 인용'의 수가 h개의 수보다 작거나 같으면 됨

// 예시
// 4,3,2,1,0
// 1번 이상 인용 - 4개 O
// 2번 이상 인용 - 3개 O => 2
// 3번 이상 인용 - 2개 X => h번 인용이 h개 보다 커져버리면 안 됨

// 5,4,3,3,2,1,0
// 1번 이상 인용 - 6개 O
// 2번 이상 인용 - 5개 O
// 3번 이상 인용 - 4개 O => 3
// 4번 이상 인용 - 2개 X => h번 인용이 h개 보다 커져버리면 안 됨

// 6,5,2,1,0
// 1번 이상 인용 - 4개 O
// 2번 이상 인용 - 3개 O => 2
// 3번 이상 인용 - 2개 X => h번 인용이 h개 보다 커져버리면 안 됨

// 100,5,4,3,2,1
// 1번 이상 인용 - 6개 O
// 2번 이상 인용 - 5개 O
// 3번 이상 인용 - 4개 O => 3
// 4번 이상 인용 - 3개 X => h번 인용이 h개 보다 커져버리면 안 됨
