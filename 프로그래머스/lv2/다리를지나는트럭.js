function solution(bridge_length, weight, truck_weights) {
    const [건넌지점, 다리, 대기트럭] = [[], [], [...truck_weights]];
    let [남는무게, 남는길이, 걸린시간] = [weight, bridge_length, 0];

    // 1) 대기중인 트럭, 다리 배열이 빌 때까지 시행
    while (다리.length !== 0 || 대기트럭.length !== 0) {
        // 2) 다리 길이, 다리 무게 허용 하는 선에서 건너기
        if (남는무게 - 대기트럭[0] >= 0 && 남는길이 > 0) {
            남는길이--;
            남는무게 -= 대기트럭[0];
            다리.push([대기트럭.shift(), 0]);
        }

        // 3) 다리위의 트럭 전부 한 칸 이동하기(시간 +1)
        다리.forEach((truck, index) => {
            truck[1]++;
            if (index === 다리.length - 1) {
                걸린시간++;
            }
        });

        // 4) 다리길이만큼 이동한 트럭이 있으면 건넌지점으로 이동시키기
        if (다리[0] && 다리[0][1] === bridge_length) {
            남는길이++;
            남는무게 += 다리[0][0];
            건넌지점.push(다리.shift()[0]);
        }
    }

    // 5) 마지막 트릭 내리고 총 걸린 시간 반환하기
    console.log(걸린시간 + 1);
    return 걸린시간 + 1;
}
solution(2, 10, [7, 4, 5, 6]);
